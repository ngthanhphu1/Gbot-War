spinner() {
    local i sp n
    sp='/-\|'
    n=${#sp}
    printf ' '
    while sleep 0.1; do
        printf "%s\b" "${sp:i++%n:1}"
    done
}
clear
echo "Đang tiến hành cập nhật cho Gbot War..."
spinner&
sleep 3
node update 
