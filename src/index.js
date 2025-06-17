const { app, BrowserWindow, Menu, nativeTheme } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
        title: 'SHIT VIEWER 3000',
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
            sandbox: false,
            devTools: true
		}
	});

	win.loadFile(path.join(__dirname, 'viewer/readmeviewer.html'));

	const fileSubmenu = [
		{ label: 'June 11 - 7:50', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june11-2025-7-50.md')) },
		{ label: 'June 13 - 19:43', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-19-43.md')) },
		{ label: 'June 13 - 20:35', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-20-35.md')) },
		{ label: 'June 13 - 21:10', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-21-10.md')) },
		{ label: 'June 14 - 10:33', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june14-2025-10-33.md')) },
		{ label: 'June 14 - 5:44', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june14-2025-5-44.md')) },
		{ label: 'June 15 - 15:27', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-27.md')) },
		{ label: 'June 15 - 15:28', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-28.md')) },
		{ label: 'June 15 - 15:30', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-30.md')) },
		{ label: 'June 15 - 15:41', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-41.md')) },
		{ label: 'June 15 - 18:02', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-02.md')) },
		{ label: 'June 15 - 18:05', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05.md')) },
		{ label: 'June 15 - 18:05 (02)', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05-02.md')) },
		{ label: 'June 15 - 18:05 (03)', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05-03.md')) }
	];

	const menu = Menu.buildFromTemplate([
		{ label: 'historay ⌚', submenu: fileSubmenu },
		{ label: 'tool 🔧', submenu: [
			{ 
				label: 'dev tool 🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧', 
				click: (menuItem, browserWindow) => {
					if (browserWindow) browserWindow.webContents.openDevTools();
				}
			}
		]},
	]);

	Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);
