const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
let mainWindow;

async function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1200, // açılacak pencerenin genişliği 
        height: 800, // açılacak pencerenin yüksekliği 
        title: 'ZombsRoyale Client - Made By Ömer Asaf Karasu', // açılacak pencerenin başlığı 
    });

    // pencerenin içerisinde açılacak olan html sayfasının belirlenmesi 
    mainWindow.loadURL("https://zombsroyale.io");
}

// uygulamanın başlatılması 
app.on('ready', createMainWindow); 