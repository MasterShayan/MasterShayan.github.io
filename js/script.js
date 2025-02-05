const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
    help: `Available commands:
    - about: Display information about me.
    - skills: List my skills.
    - experience: Show my work experience.
    - education: display my education background.
    - projects: Display my main projects (Mostly Open-Source).
    - contact: Get my contact information.
    - clear: Clear the terminal.`,
    about: `I am Shayan, a young Iranian Highly motivated and versatile
proficient in AI, back-end web/mobile/desktop development,
database design/management, APIs, software/hardware tools,
bot programming, and social media automation. Strong
foundation in Python, Java, Rust, and JavaScript. Passionate
about open-source and Linux. Committed to collaborative
development and sharing contributions. Resourceful problem-
solver focused on innovative solutions.`,
    skills: `I am familiar with the fundamentals of many technologies, but my core competencies include:

    - Python
    - Java
    - JavaScript
    - Rust
    - PHP
    - Bash scipt`,
    experience: `
    Open River (Application Layer Protocol):
    
    This protocol is a real-time, decentralized, and secure chat system built on top of the Tor
network (onion routing). Its goal is to provide private and untraceable communication for
users.

LOX ID (Identity Recognition System):

Using Blockchain technology, provides a new and secure solution for authenticating users
and ensuring the security of the platform. By creating a unique digital identity for each user,
the system allows for their authenticity to be identified and verified.

LOX browser (Search Engine):

The world's fastest, most secure, and most powerful Web3 search engine. Experience
unparalleled personalization, minimal footprint, and maximum capabilities. LOX is the only
search engine built from the ground up for the next generation of the web.`,
    education: `I'm self-taught, mainly learning from YouTube, but I've also completed a few valuable courses, including:

    - ICDL (2021)
    - LPCI1 (2022)
    - LPCI2 (2022-2023)`,
    contact: `Due to my limited presence on social media, my primary contact methods are as follows.

    Email: MasterShayan@proton.me

    Telegram: t.me/MasterShayan

    GitHub: github.com/MasterShayan`,
    projects: `Among my numerous projects, the top 10 are listed below:

    - LOX search engine
    - Open River protocol
    - LOX ID
    
    (The source code for most is available on GitHub.com/Shayan-Gol)`,
    clear: `clear`
};

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        handleCommand(command);
    }
});

function handleCommand(command) {
    if (command === 'clear') {
        clearTerminal();
        return;
    }
    let response = commands[command] || `Command not found: ${command}`;
    typeResponse(response);
}

function typeResponse(text) {
    const responseLine = document.createElement('p');
    output.appendChild(responseLine);
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            responseLine.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50); 
}

function clearTerminal() {
    output.innerHTML = '<p>Terminal cleared. Type "help" to see available commands.</p>';
}
