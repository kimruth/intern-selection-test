INSERT INTO users (name, email, password) VALUES
('Bright Thelvis', 'bright@gmail.com', 'bright1'),
('Abdoul Idriss', 'idriss@gmail.com', 'idriss2'),
('Nanda Laure', 'laure@gmail.com', 'laure3'),
('Mary Jane', 'jane@gmail.com', 'jane4'),
('Andy Tresor', 'andy@gmail.com', 'andy5');

SELECT * FROM users;

SELECT * FROM users 
WHERE created_at > '2025-02-19 16:21:27';