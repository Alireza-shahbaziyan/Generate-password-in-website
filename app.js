const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '#', '$',
    '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_',
    '{', '|', '}', '~', '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9'
]
const GPIJ = () => {
    const passLen = 14
    let pass = ''
    for (i = 0; i < passLen; i++) {
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        pass += alphabet[randomIndex];
    }    
    document.getElementById("password").innerHTML = pass
}
