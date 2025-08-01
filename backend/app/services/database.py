import sqlite3
from datetime import datetime


class DatabaseService:
    def __init__(self, db_path: str):
        self.db_path = db_path
        self.connection = None

    def _get_connection(self):
        if self.connection is None:
            self.connection = sqlite3.connect(self.db_path)
        return self.connection

    def init_db(self):
        create_table_query = """
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL
        )
        """
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(create_table_query)
            conn.commit()

    def add_message(self, name: str, email: str, message: str) -> int:
        insert_query = """
        INSERT INTO messages (date, name, email, message)
        VALUES (?, ?, ?, ?)
        """
        current_date = datetime.now().isoformat()
        
        with self._get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(insert_query, (current_date, name, email, message))
            conn.commit()
            return cursor.lastrowid

    def close(self):
        if self.connection is not None:
            self.connection.close()
            self.connection = None
