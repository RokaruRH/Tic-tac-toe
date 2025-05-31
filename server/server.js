import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Получение __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Указание статической папки
app.use(express.static(path.join(__dirname, "..", "client")));

// Запуск сервера
app.listen(3000, () => {
	console.log("Сервер запущен на http://localhost:3000");
});
