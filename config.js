const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_57_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0cvalM4S1FHYm51MGdxTGhSVnVqYk0vdzh0ZXZra203K2orbGtBYXRKST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVVE3ZzBvNVBRXzJ3WWN0REwwUHpZd1wiLFxuICBcInBob25lSWRcIjogXCJiM2Y0MWUzOS1kMjhkLTQ5MDgtODU4MS0zMTRjYzExYjliODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyNCxcbiAgICAgIDE2NSxcbiAgICAgIDIzNixcbiAgICAgIDczLFxuICAgICAgMjksXG4gICAgICAxMzQsXG4gICAgICA4NyxcbiAgICAgIDIwOCxcbiAgICAgIDE0MixcbiAgICAgIDgsXG4gICAgICAyNDksXG4gICAgICA4MyxcbiAgICAgIDE2MSxcbiAgICAgIDIzOSxcbiAgICAgIDMxLFxuICAgICAgMjEzLFxuICAgICAgMTExLFxuICAgICAgNTQsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMjQ0LFxuICAgICAgMTUzLFxuICAgICAgNzcsXG4gICAgICAxOTUsXG4gICAgICAxNDAsXG4gICAgICA2OSxcbiAgICAgIDE3MixcbiAgICAgIDY1LFxuICAgICAgMjE3LFxuICAgICAgMjM0LFxuICAgICAgMixcbiAgICAgIDE5NSxcbiAgICAgIDE0NSxcbiAgICAgIDg0LFxuICAgICAgNDcsXG4gICAgICA2NixcbiAgICAgIDEyNixcbiAgICAgIDEyOCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNFBaNzIzOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4NzA1ODc2OTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlJ7wnZSf8J2UnvCdlLDwnZSw8J2UqPCdlKLwnZSr8J2Ut/CdlKxcIixcbiAgICBcImxpZFwiOiBcIjYxMDU3NzU4NDA0Njg5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzJUc01VQkVKRFkxN29HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpYzhhYXZrMHo5QlJtNEZENGhGTDYzQURLYmRiNmtjOHdLYjBQY1hqa1Z3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRtZGJaNFhOanJ3bkttMWpXb0FESzBpbS9ZanoxOThlNXdhanlOV3Roc29PSDFSUEtmU3ZRODh6SmRNYzlKTUlSSVFkWHN5cFVvbXB6b3d2RGJsc0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndMTnk4YkMwMVlycXlwS2NzY0UzT2hlM1FpL01zWmJJZmR6OVR4NFZpQTlCRG1xSXUrQUUyNmpJdnZNRnhqcXNEYXhJWjZDOXdqOEZ2dWxrdnA0cGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODcwNTg3Njk3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjg0MjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEN3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQ3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEQldYamowK1lla0M3ZVhoK3NuN0RWTFFXSGdMSk1hODNDVkg2YUNHeWlNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxMzkyNzkxNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
