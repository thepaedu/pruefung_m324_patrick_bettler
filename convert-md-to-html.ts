import fs from 'fs';
import path from 'path';
import marked from 'marked';

const mdFilePath: string = path.join(__dirname, 'task-3.md');
const htmlFilePath: string = path.join(__dirname, 'task-3.html');

fs.readFile(mdFilePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

    const htmlContent: string = marked(data);

  const htmlOutput: string = `
  <!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted Markdown</title>
  </head>
  <body>
    ${htmlContent}
  </body>
  </html>
  `;

  fs.writeFile(htmlFilePath, htmlOutput, (writeErr: NodeJS.ErrnoException | null) => {
    if (writeErr) {
      console.error('Fehler beim Schreiben der Datei:', writeErr);
    } else {
      console.log('Die Datei task-3.html wurde erfolgreich erstellt.');
    }
  });
});
