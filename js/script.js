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
    about: `I am Shayan, a young Iranian programmer proficient in various fields, including Artificial Intelligence, website backend development, mobile and desktop application development, database design and management, web service (API) development, software and hardware tool and gadget creation, bot programming, and social media automation.

My programming journey began around 4-5 years ago, but my familiarity and interaction with computers started in early childhood (around the age of 5). Due to personal circumstances, I gained a relative understanding of computer system configurations and settings from a young age, which paved the way for my entry into the world of programming.

My first programming experience was developing a Telegram bot with a welcome system, which sparked my interest in this field.

Currently, Python is my primary strength in programming languages, followed by proficiency in Java and JavaScript.

I have a strong passion for open-source projects and the Linux operating system, which is why most of my valuable projects are released as open source and are publicly accessible.`,
    skills: `I am familiar with the fundamentals of many technologies, but my core competencies include:

    - Java
    - Zig
    - JavaScript
    - Python
    - PHP
    - Bash scipt`,
    experience: `My initial years of programming were spent freelancing, followed by remote work or building my own team/brand:

    - Owner and Head developer of Kyrus™. (2024-Present)
    - Back-End developer at SirMajazi store. (2024-Present)
    - Owner and Bot developer of Khalij-e Fars e-sport (2024-Present)
    - Owner and API developer of HiRAMiX™. (2023-2024)`,
    education: `I'm self-taught, mainly learning from YouTube, but I've also completed a few valuable courses, including:

    - ICDL (2021)
    - LPCI1 (2022)
    - LPCI2 (2022-2023)`,
    contact: `Due to my limited presence on social media, my primary contact methods are as follows.

    Email: MasterShayan@proton.me

    Telegram: t.me/MasterShayan

    Discord: discord.com/users/639790756982161430 

    GitHub: github.com/MasterShayan`,
    projects: `Among my numerous projects, the top 10 are listed below:

    - LOX search engine
    - Pyig library
    - Open River protocol
    - RaSHaN AI
    - Cytor APP
    
    (The source code for most is available on GitHub.com/MasterShayan)`,
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
