const speakers = [
    {
        "name": "Eugene Fidelin",
        "description": "Engineering Manager @ eBay, ex Frotend Architect @ Marktplaats. Experienced Full-stack Web Developer with 20+ years in the field. Enjoy helping teams to build well-tested, high-performing, and secure software using Javascript, Node.js and React.",
        "imageSrc": "https://sessionize.com/image/a639-200o200o2-D2icMf25kz2jdn3wxqPqKn.jpg"
    },
    {
        "name": "Stefan van de Vooren",
        "description": "Stefan fell in love with front-end development more than 20 years ago. He developed serious games, apps and websites. For the past 7 years, he has worked for Rabobank, answering the question: ‘how to develop frontend @scale with hundreds of developers together’. Stefan loves making code faster and fire trucks 🚒.",
        "imageSrc": "https://sessionize.com/image/fe2b-200o200o2-KNwS5MhXjpZubaViRSfJcw.jpg"
    },
    {
        "name": "Sander Viegers",
        "description": "As the Head of Design at Rabobank, Sander leads the multidisciplinary design organization of 99 designer and researchers in creating comprehensive and delightful digital experiences for customer and employees. With prior experience in leading design teams at Microsoft and Amazon, Sander has a proven track record of successful design leadership. He holds a Master's degree in Industrial Design Engineering from Delft University of Technology and has been named inventor on multiple patents.",
        "imageSrc": "https://sessionize.com/image/5dc7-200o200o2-98b7Xu9GJcCwa2zgb4hRAu.jpg"
    },
    {
        "name": "Gabriël Moawad",
        "description": "Gabriël Moawad is a managing front-end development consultant at Capgemini with more than a decade’s journey through the web’s ever-evolving landscape. His approach to development is seasoned with humor and driven by a profound passion for the craft. As a mentor, Gabriël delights in guiding new talent, instilling confidence, and sparking excellence—all with a spirit of fun and fellowship. His expertise has benefited clients like ABN AMRO, Lacoste, Suit Supply, Unilever, and The Dutch Police. At his current client Boels, Gabriël leads the charge in adopting the headless CMS Contentstack, architecting components that power a suite of web applications. Beyond the code, he’s a storyteller at heart, captivating audiences with practical insights and tales from the trenches of front-end development.",
        "imageSrc": "https://sessionize.com/image/fe65-200o200o2-a93WvheiKeZ3yXNPZhJZsX.jpg"
    },
    {
        "name": "Drazen Jankovic",
        "description": "Senior Technology Consultant at Sogeti with over 22 years of experience in frontend and a specialization in accessibility. Always looking to experiment with new CSS and JS technologies to bring the best possible user experience to all users. I'm very much into the geeky and the nerdy, with everything ranging from boardgames to cosplay and prop making.",
        "imageSrc": "https://sessionize.com/image/df29-200o200o2-pFEmRZyTZ4hdLEinGrtWvB.jpg"
    },
    {
        "name": "Matheus Albuquerque",
        "description": "Matheus is a Sr. Front-End Engineer at Medallia, building their surveys platform and helping them shape the customer experience market with React and a Google Developer Expert in Web Performance. His areas of interest include React and its ecosystem, JS and compile-to-JS languages, DX, and perceived performance optimization. Aside from public speaking about these, he also volunteers at TechLabs, teaching front-end development.",
        "imageSrc": "https://sessionize.com/image/6554-200o200o2-HqQmjHT6FH27cT3cXAK9Sa.jpg"
    },    {
        "name": "Bram Kaashoek",
        "description": "Full stack software engineer with over 10 years of experience, specialised in architecting and building front-end platforms",
        "imageSrc": "https://sessionize.com/image/b5ea-200o200o2-MEZSLbkkhJAEMA44w7Fm74.jpg"
    },
    {
        "name": "Sibbe Heijne",
        "description": "As a professional frontend engineer, I bring over a decade of experience to the table. Throughout my journey, I've had the privilege of working with prominent companies like Schiphol, Shell, KPN, Booking.com, De Mandemakers Groep, and Epplix. My passion for innovation has been the driving force behind my success, and I've dedicated 10 years to mastering the intricacies of JavaScript.",
        "imageSrc": "https://sessionize.com/image/3885-200o200o2-4ZfWjHa7dtiFCPo5EFQh11.jpg"
    },
    {
        "name": "Tobias Münch",
        "description": "Tobias Münch is CTO at Münch Gesellschaft für IT-Solutions mbH (MITS), where Tobias is responsible for the Technology stack that is responsible for individual developments and products. He also actively trains his employees in the Technology stack and also uses it practically in various projects. The supervised projects and products originate primarily from the finance and veterinary medicine sectors. In a research project, Tobias deals with the resilience of distributed software systems. In the current the research area focuses on web apps and their client-side architecture.",
        "imageSrc": "https://sessionize.com/image/f126-200o200o2-GJdQPYxMXCJ7w7SBD3YpSH.png"
    },
    {
        "name": "Rodney Wormsbecher",
        "description": "Rodney is an experienced Senior Software Engineer, teacher, and JavaScript evangelist with nearly a decade of experience. He demonstrates a profound interest in solving complex problems focusing mainly on front-end and cloud technologies. In his spare times he spend most of his time with his kids, games, tinkering with the latest tech and observing modern user interfaces.",
        "imageSrc": "https://sessionize.com/image/3662-200o200o2-Srt5cAZ6T3Zmbn3s58nEUg.png"
    },
    {
        "name": "Lucien Immink",
        "description": "A Java developer that saw the light and embraced Internet Explorer 6 as his digital overlord. Over two decades in the field has taught Lucien how we often reinvent the wheel to accommodate new shiny frameworks. Now, as a Principal Consultant, his mission is to discover elegant solutions for his clients. While we’ve moved beyond Flash and jQuery, the web platform technologies: HTML, CSS, and JavaScript remain essential. Rather than battling the platform, let’s embrace it. Lucien is a rewarded Google Developer Expert for Web Technologies and capabilities since 2022.",
        "imageSrc": "https://sessionize.com/image/eb47-200o200o2-71C2PsD1CRL78t4eRf2vXg.jpg"
    },
    {
        "name": "Mihaela Gheorghe-Roman",
        "description": "Mihaela is a Software Architect at Systematic, Romania. Ph.D in artificial neural network algorithms, Assistant Professor at the University of Cybernetics and Informatics in Bucharest, she is a dedicated lead developer and architect who enjoys sharing her knowledge.",
        "imageSrc": "https://sessionize.com/image/e3fb-200o200o2-LA6eeWoZdKrL4yRxq8rRiV.png"
    },
    {
        "name": "Jeroen Akkerman",
        "description": "I am passionate about crafting high-quality software, both as a professional and as a hobbyist. I love to see people enjoy using the programs I create. I focus on frontend development in my professional life, but also build full-stack software on occasion.",
        "imageSrc": "https://sessionize.com/image/4bf8-200o200o2-UUF8cF7nkz1nkJpqibG3qB.jpg"
    },
    {
        "name": "Ko Turk",
        "description": "Ko Turk is a Developer (Ambassador), who has more than 15+ years of experience in developing Java / Kotlin applications.",
        "imageSrc": "https://sessionize.com/image/6899-200o200o2-EupDehSbyCtxrWHgadQRhp.jpg"
    },
    {
        "name": "Richard Roozenboom",
        "description": "Richard has over 20 years of experience in Frontend Development and DevOps. Currently, he is working at Rabobank where his focus shifted from pure frontend-related work towards CI/CD, monorepo management and frontend tooling.",
        "imageSrc": "https://sessionize.com/image/cd40-200o200o2-9wec6XHnxB4pJEiGcSX9dX.jpg"
    },
    {
        "name": "Joran Quinten",
        "description": "Jorans passion involves getting people to love technology and getting technology to play nice. He works as an interaction developer with ♡ for web, tech, science & tinkering with stuff. Focussed on innovation at Jumbo Supermarkten. Writes, tweets and speaks every now and then.",
        "imageSrc": "https://sessionize.com/image/8dd2-200o200o2-wxz9748QYNTQiJ9yTz7g5j.jpg"
    },
    {
        "name": "Brecht De Ruyte",
        "description": "Brecht De Ruyte is a self-taught front-end developer located in Belgium with a passion for UX and Design. During the day you can find him working at iO, a full service agency. Besides that, he is also a Google Developer Expert, Smashing Magazine writer and blog owner of utlitybend.com. He also participates in the W3C community: Open UI.",
        "imageSrc": "https://sessionize.com/image/6a81-200o200o2-NLGAzLZGjChMCSvUWXSjxX.jpg"
    },
    {
        "name": "Nimo Beeren",
        "description": "Nimo sits at the intersection of software engineering, data science and creative programming. His primary focus is building tools that help people use data, code and AI to create great things. Whether it's frontend devtools, testing or AI assistants, he is interested in anything that empowers developers to build bigger and better things. Nimo holds an MSc. Computer Science & Engineering degree and has presented his work at major conferences.",
        "imageSrc": "https://sessionize.com/image/f38e-200o200o2-HDB313dKownnpe6xLUyKiy.jpg"
    },
    {
        "name": "Małgorzata Janeczek",
        "description": "Hi! I am Gosia, but some people know me as a mom, a daughter, some as friend, others coworker, but for some, I am just “ey, you!”. A few years back I graduated from Automatic Control and Robotics, and soon after starting my job in that field, I knew... it's not for me. So I started looking for something new. Then.. it hit me how cool was programming during my studies, so HERE I AM!",
        "imageSrc": "https://sessionize.com/image/9ce3-200o200o2-MTHAJUXVq6BJQ1PxQcCiZ1.jpg"
    },
    {
        "name": "Sander van Surksum",
        "description": "Sander is an international expert in website performance optimisation, and the founder of Iron/Out. Over the years, he has helped numerous companies improve the speed of their websites and make their users more happy.",
        "imageSrc": "https://sessionize.com/image/2323-200o200o2-XJTmuVJJU9E447EY2tL7k9.jpg"
    },
    {
        "name": "Remy Parzinski",
        "description": "Always looking to improve process, input, and output.",
        "imageSrc": "https://sessionize.com/image/8467-200o200o2-nuSCQJYC4j5j3TdDXcz3ZJ.jpg"
    },
    {
        "name": "Kilian Valkhof",
        "description": "Kilian is a front-end developer with over 20 years of experience that switched from building websites to building apps to build websites with. He is interested in modern web development, desktop app development and new technologies, and regularly speaks about topics like responsive websites, accessibility, design systems and Electron. Kilian is a frequent open source contributor.",
        "imageSrc": "https://sessionize.com/image/caf1-200o200o2-4RQbMrsuFRyivDvf1biptR.jpg"
    },
    {
        "name": "Lewis Voncken",
        "description": "Meet Lewis Voncken, better known as Mr. Lewis the Cycling Developer. Embracing the mantra of Work Hard, Play Hard, Lewis seamlessly fuses his passion for coding with his love for cycling. With a knack for transforming lines of code into interactive wonders, he pedals through the digital landscape with the same enthusiasm he brings to the open road.",
        "imageSrc": "https://sessionize.com/image/887c-200o200o2-pDmgr9nxhiUH5oX72g8q7o.jpeg"
    },
    {
        "name": "Önder Ceylan",
        "description": "Önder is a GDE in Web Tech with a focus on Capabilities & Installability and he's the maker or pwa-asset-generator. JavaScript and the web have been his passion since late 90s and nowadays he enjoys it at its full while working as an independent contractor. He believes in team work and he shares his knowledge with the communities as a co-organiser and speaker. He's also interested in photography, movies and dancing.",
        "imageSrc": "https://sessionize.com/image/eb50-200o200o2-54-9e61-4d97-856e-d18b0e1cee09.1f72dc10-36a9-454a-9fa4-cfbf53d89c1b.jpg"
    },
    {
        "name": "Mike van der Bijl",
        "description": "My career has taken me through a diverse journey, spanning roles that include full-stack developer, business analyst, IT manager, and now thriving in cybersecurity. Throughout this journey, my deep passion for technology has remained a constant driving force.",
        "imageSrc": "https://sessionize.com/image/c546-200o200o2-7r3FimrcQHnDQcmKgmMvye.png"
    },
    {
        "name": "Dan Neciu",
        "description": "I am a software engineer, focusing mostly on the Front-end, in a love-love relationship with Javascript. I worked professionally on all Big Three Frameworks (But secretly I love React the most, please don't tell my Vue-on-all-projects company)",
        "imageSrc": "https://sessionize.com/image/b423-200o200o2-M1yjgF7K4273Yw4Ebu2Emm.png"
    },
    {
        "name": "Bruce Lawson",
        "description": "Bruce was a member of the committee that drafted the British Standard for commissioning accessible websites, and an editor of the HTML5.3 spec for the W3C. He’s also a musician and has been a Bollywood movie extra, tutor to a Princess in Thailand, a tarot reader in Istanbul and arrested (mistakenly!) for espionage in Moscow.",
        "imageSrc": "https://sessionize.com/image/ae67-200o200o2-3PdfwsQd8CFU21dq2nm1TV.png"
    },
    {
        "name": "Cat Johnson",
        "description": "Cat Johnson is a Senior Frontend Engineer at Khan Academy who has worked for more than seven years in the industry. She works on React Web Components and focuses on building accessible technology.",
        "imageSrc": "https://sessionize.com/image/cb5e-200o200o2-SmvMXBy9NUahaJyDksHHzv.jpg"
    },
    {
        "name": "Dennis Spierenburg",
        "description": "Dennis is a specialized frontend developer with experience in JavaScript, Vue and React. Dennis loves to discover new technologies and tries to share his knowledge with as many people as possible.",
        "imageSrc": "https://sessionize.com/image/03d3-200o200o2-poiCkvWmZ2zkfisnKJS2z4.jpg"
    },
    {
        "name": "Ramona Domen",
        "description": "Ramona is a software engineer and public speaker with a passion for creating inclusive and accessible applications. She likes to spread awareness about this topic and hopes to inspire people both in her daily work and by taking the stage whenever she gets the chance.",
        "imageSrc": "https://sessionize.com/image/d158-200o200o2-NqEj2jjcUManJxGWm2UQqo.jpg"
    }
]

const speakersSection = document.getElementById('speakers');
speakers.forEach(speaker => {
    const speakerCard = createSpeakerCard(speaker.imageSrc, speaker.name, speaker.description);
    speakersSection.appendChild(speakerCard);
});

function createSpeakerCard(imageSrc, name, description) {
    const card = document.createElement('div');
    card.className = 'speaker-card';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = name;

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const p = document.createElement('p');
    p.textContent = description;

    const rating = document.createElement('div');
    rating.className = 'rating';
    for (let i = 5; i > 0; i--) {
        const star = document.createElement('span');
        star.textContent = '★';
        star.dataset.rating = i;
        star.addEventListener('click', function() {
            const stars = rating.querySelectorAll('span');
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            let prev = this.previousElementSibling;
            while (prev) {
                prev.classList.add('selected');
                prev = prev.previousElementSibling;
            }
        });
        rating.appendChild(star);
    }

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(rating);

    return card;
}
