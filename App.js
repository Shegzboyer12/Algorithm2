const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
let db = new sqlite3.Database(':memory:');

// Create Hotel table
db.run(`CREATE TABLE Hotel (
    HotelID INTEGER PRIMARY KEY,
    Name TEXT,
    Address TEXT,
    City TEXT,
    State TEXT,
    Zip TEXT
)`);

// Create Room table
db.run(`CREATE TABLE Room (
    RoomID INTEGER PRIMARY KEY,
    RoomNumber TEXT,
    RoomType TEXT,
    HotelID INTEGER,
    FOREIGN KEY (HotelID) REFERENCES Hotel (HotelID)
)`);

// Create Guest table
db.run(`CREATE TABLE Guest (
    GuestID INTEGER PRIMARY KEY,
    FirstName TEXT,
    LastName TEXT,
    Address TEXT,
    City TEXT,
    State TEXT,
    Zip TEXT,
    Phone TEXT
)`);

// Create Reservation table
db.run(`CREATE TABLE Reservation (
    ReservationID INTEGER PRIMARY KEY,
    Date TEXT,
    CheckInDate TEXT,
    CheckOutDate TEXT,
    RoomID INTEGER,
    GuestID INTEGER,
    FOREIGN KEY (RoomID) REFERENCES Room (RoomID),
    FOREIGN KEY (GuestID) REFERENCES Guest (GuestID)
)`);

// Insert sample data (optional)
db.run(`INSERT INTO Hotel (Name, Address, City, State, Zip) VALUES
    ('Hotel Sunshine', '123 Beach Ave', 'Miami', 'FL', '33101'),
    ('Mountain Retreat', '456 Hilltop Rd', 'Denver', 'CO', '80202')
`);

db.run(`INSERT INTO Room (RoomNumber, RoomType, HotelID) VALUES
    ('101', 'Single', 1),
    ('102', 'Double', 1),
    ('201', 'Single', 2),
    ('202', 'Suite', 2)
`);

db.run(`INSERT INTO Guest (FirstName, LastName, Address, City, State, Zip, Phone) VALUES
    ('John', 'Doe', '789 Pine St', 'Orlando', 'FL', '32801', '555-1234'),
    ('Jane', 'Smith', '321 Oak St', 'Austin', 'TX', '73301', '555-5678')
`);

db.run(`INSERT INTO Reservation (Date, CheckInDate, CheckOutDate, RoomID, GuestID) VALUES
    ('2024-06-01', '2024-06-10', '2024-06-15', 1, 1),
    ('2024-06-05', '2024-06-20', '2024-06-25', 2, 2)
`);

// Query the tables (optional)
db.each(`SELECT * FROM Hotel`, (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(row);
});

db.each(`SELECT * FROM Room`, (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(row);
});

db.each(`SELECT * FROM Guest`, (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(row);
});

db.each(`SELECT * FROM Reservation`, (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(row);
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});
