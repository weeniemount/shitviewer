const { app, BrowserWindow, Menu, nativeTheme } = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'icons', 
	process.platform === 'win32' ? 'icon-windows.ico' : 'icon-linux.png'
);

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
        title: 'SHIT VIEWER 3000',
		icon: iconPath,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
            sandbox: false,
            devTools: true,
		}
	});

	win.loadFile(path.join(__dirname, 'viewer/readmeviewer.html'));

	const fileSubmenu = [
		{ label: 'June 11 2025 - 7:50', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june11-2025-7-50.md'), 'June 11 2025 - 7:50') },
		{ label: 'June 13 2025 - 19:43', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-19-43.md',), 'June 13 2025 - 19:43') },
		{ label: 'June 13 2025 - 20:35', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-20-35.md',), 'June 13 2025 - 20:35') },
		{ label: 'June 13 2025 - 21:10', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june13-2025-21-10.md',), 'June 13 2025 - 21:10') },
		{ label: 'June 14 2025 - 10:33', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june14-2025-10-33.md',), 'June 14 2025 - 10:33') },
		{ label: 'June 14 2025 - 5:44', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june14-2025-5-44.md'),  'June 14 2025 - 5:44') },
		{ label: 'June 15 2025 - 15:27', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-27.md'), 'June 15 2025 - 15:27') },
		{ label: 'June 15 2025 - 15:28', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-28.md'), 'June 15 2025 - 15:28') },
		{ label: 'June 15 2025 - 15:30', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-30.md'), 'June 15 2025 - 15:30') },
		{ label: 'June 15 2025 - 15:41', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-15-41.md'), 'June 15 2025 - 15:41') },
		{ label: 'June 15 2025 - 18:02', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-02.md'), 'June 15 2025 - 18:02') },
		{ label: 'June 15 2025 - 18:05', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05.md'), 'June 15 2025 - 18:05') },
		{ label: 'June 15 2025 - 18:05 (02)', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05-02.md'), 'June 15 2025 - 18:05 (02)') },
		{ label: 'June 15 2025 - 18:05 (03)', click: () => win.webContents.send('load-md', path.join(__dirname, 'readmes/june15-2025-18-05-03.md'), 'June 15 2025 - 18:05 (03)') }
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
