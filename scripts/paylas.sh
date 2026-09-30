#!/usr/bin/env bash
# Siteyi geçici bir internet linkiyle paylaşır (Cloudflare Quick Tunnel).
# Kullanım:  ./scripts/paylas.sh
# Link, bu pencere açık kaldığı sürece çalışır. Kapatmak için Ctrl+C.
# Her çalıştırmada yeni bir link oluşur.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-8787}"
# Port doluysa (ör. eski bir paylaşım açık kaldıysa) boş olanı bul; yoksa link eski siteyi gösterir
while lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do PORT=$((PORT + 1)); done

command -v cloudflared >/dev/null || { echo "cloudflared yok. Kurmak için: brew install cloudflared"; exit 1; }

# Sadece site dosyalarını geçici bir klasöre kopyala (.claude, README vb. paylaşılmaz)
SITE="$(mktemp -d)"
cp "$ROOT/index.html" "$ROOT/favicon.ico" "$SITE/"
rsync -a --exclude 'logo1.PNG' --exclude 'logo2.PNG' --exclude '.DS_Store' "$ROOT/assets" "$SITE/"

LOG="$(mktemp)"
cleanup() {
  kill "${SERVER_PID:-}" "${TUNNEL_PID:-}" 2>/dev/null || true
  rm -rf "$SITE" "$LOG"
  echo; echo "Paylaşım kapatıldı."
}
trap cleanup EXIT INT TERM

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$SITE" >/dev/null 2>&1 &
SERVER_PID=$!

cloudflared tunnel --no-autoupdate --url "http://127.0.0.1:$PORT" >"$LOG" 2>&1 &
TUNNEL_PID=$!

echo "Link hazırlanıyor..."
URL=""
for _ in $(seq 1 60); do
  URL="$(grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com' "$LOG" | head -1 || true)"
  [ -n "$URL" ] && break
  sleep 0.5
done

if [ -z "$URL" ]; then
  echo "Link alınamadı. cloudflared çıktısı:"; cat "$LOG"; exit 1
fi

echo
echo "  Paylaşım linki:  $URL"
echo
echo "Bu linki arkadaşına gönderebilirsin. Pencere açık kaldıkça çalışır (Ctrl+C ile kapat)."
printf '%s' "$URL" | pbcopy 2>/dev/null && echo "(Link panoya kopyalandı.)"

wait "$TUNNEL_PID"
