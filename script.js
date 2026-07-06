const messages = [
    "Whenever I wake up you're the first thing on my mind.",
    "Your cute laugh is music to my ears.",
    "I saw a stray cat laying down by the pool in the sun the other day and it made me think of you.",
    "My sun, my moon, my stars,",
    "I don't think I could love another more, I adore you more than words can say but I hope things like this help express and show it I've never been very good with words, but",
    "You really are the cutest",
    "just want to do right by you and make you happy <3",
    "I wish I had more of a way with words but you are beyond wonderful and I feel so lucky to have you in my life.",
    "You know god broke the mold when he made you?",
    "I love your brown eyes, your voice, your cute voice, whenever I'm with you and watching you play videogames",
    "I love your pretty lips want to kiss them and run my fingers through your hair, I always smile like an idiot to myself whenever I remember we match",
    "Over time I've really grown to like you, all the times we've fallen asleep together or cuddled or watched stupid shit, I really do love being with you",
    "You deserve head, a million dollars, breakfast, and a brand new videogame and car every single morning......",
    "You're funny and cute and fucking adorable I want you so bad it makes me look stupid",
    "You deserve the world and more",
    "Always thinking of you, hoping no one's given you any shit and hoping you're having a good day. You are always loved, cherished, and thought of my love.",
    "if ur reading this far hi baby, I wouldn't let anyone else do what you do do it's all yours",
    "i really do belong to you <3",
    "I adore you pretty boy",
    "u want sum fuk",
    "bitchhhhhhhhhhhhhhhhhh <3",
    "u so fucking cute god",
    "You wanna cum inside me over and over again and fuck me into the mattress then let me do the same to you?",
    "I wanna make you feel good darling",
    "mwah",
    "You can put a leash and collar on me, a dog tag, you can put your name on my ass, leave permanant scratch marks down my back, leave hickeys and bruises and bite marks where everyone else can see. (i didnt say that my laptop was possessed...)",
    `:3`,
    "meow",
    "we should like kiss and watch anime..........",
    "jst put a baby in me already ugh",
    "hiiiiiiiiiiiiiiii",
    "my love <3",
    "I love you so much."
];







const message = document.getElementById("message");




const nextButton = document.getElementById("nextButton");




let currentMessage = 0;







message.textContent = messages[currentMessage];






nextButton.addEventListener("click", function () {




    currentMessage++;





    if (currentMessage < messages.length) {

       
        message.textContent = messages[currentMessage];

       
        if (currentMessage === messages.length - 1) {

            nextButton.textContent = "One More Thing...";

        }

    } else {




        message.textContent = "I love you forever. ♡";

        nextButton.textContent = "♡";

        nextButton.disabled = true;

    }

});


