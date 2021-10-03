module.exports = (client) => {

    var jokes = [
        { joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.' },
        { joke: 'Why did the melon jump into the lake? It wanted to be a water-melon.' },
        { joke: 'What did the duck say when it bought lipstick? “Put it on my bill.”' },
        { joke: 'What do you call a pig that does karate? A pork chop.' },
        { joke: 'What has a bed that you can’t sleep in? A river.' },
        { joke: 'Why were the teacher’s eyes crossed? She couldn’t control her pupils.' },
        { joke: 'What starts with E, ends with E, and has only 1 letter in it? An Envelope.' },
        { joke: 'How does the ocean say hello? It waves.' },
        { joke: 'What lights up a soccer stadium? A soccer match.' },
        { joke: 'What creature is smarter than a talking parrot? A spelling bee.' },
        { joke: 'Which U.S. state has the smallest soft drinks? Minnesota (as in, “mini-soda”).' },
        { joke: 'Why couldn’t the leopard play hide and seek? Because he was always spotted.' },
        { joke: 'Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.' },
        { joke: 'Why did the drum take a nap? It was beat.' },
        { joke: 'Where do hamburgers go dancing?  They go to the meat-ball.' },
      ]
      
      //choosing a random joke from the array
      
      var knock = function() {
        var joke = jokes[Math.floor(Math.random() * jokes.length)]
        return formatJoke(joke)
      }
    
    function formatJoke(joke) {
        return [
            joke.joke,
        ].join('\n')
      }
      
      //Function knock() returns the formatted joke
      client.on('message', (msg) => {
        if (msg.content ===('!joke')) {
      
                msg.reply(knock());
           
        }
      });
    }