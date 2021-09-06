# kaolad bot V.2.1
### Select what you want to see
- [Invite link](https://github.com/ronnapatp/kaoladbot#invite-link)
- [Set up application partrol on discord developer](#set-up-application-partrol-on-discord-developer)
- [Set up this bot in you computer](https://github.com/ronnapatp/kaoladbot#set-up-this-bot-in-you-computer)
- [Licence](#licence)
# Invite link
[Click here to invite bot](https://discord.com/api/oauth2/authorize?client_id=867031115373215795&permissions=0&scope=bot)

# Set up application partrol on discord developer
1. Go to [discord developer](https://discord.com/developers/applications)
2. Create new application

![image](https://i.imgur.com/HsfkNMy.png) 

3. Go to bot section down the OAuthO2                           
![image](https://i.imgur.com/Pu3ZAn1.png)        
4. Click `Add bot` and click `Yes ,do it`

![image](https://i.imgur.com/s71ClT6.png)

5. Click `Copy` to copy token and click `Regenerate` to regenerate token
**❌DO NOT GIVE THIS TOKEN TO ANYONE!❌**

![image](https://i.imgur.com/MBM31gJ.png)

6. Open `config.json` file and paste on token also insert your prefix for example `!` `$`
```diff
{
-  "token" : ""
+  "token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
-  "prefix" : ""
+  "prefix" : "!"
}
```
7. Now back on discord developer and click on OAuthO2 (www.discord.com/developers/applications/Your-application-id/oauth2)
![image](https://i.imgur.com/JUgSmP0.png)        
8. Look at SCOPES section and click `bot`
![image](https://i.imgur.com/fpmmSOR.png)
9. You will see BOT PERMISSIONS section you can click to choose ADMINISTER
![image](https://i.imgur.com/7eOtoFi.png)
10. You will get link like down here ⬇ you need to copy and paste in new tab
![image](https://i.imgur.com/Jax0G8R.png)
**DONE**

# Set up this bot in you computer
1. Install discord.js
```
npm install discord.js
```
2. Run bot
```
node .
```
3. Finished Please Enjoy
# Licence
MIT License

Copyright (c) 2021 Ronnapat and Bhira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
