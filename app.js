// Define Gymnasium entity
class Gymnasium {
    constructor(gymnasiumId, name, address, telephoneNumber) {
        this.gymnasiumId = gymnasiumId;
        this.name = name;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
    }
  }
  
  // Define Member entity
  class Member {
    constructor(memberId, lastName, firstName, address, dateOfBirth, gender, gymnasiumId) {
        this.memberId = memberId;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.gymnasiumId = gymnasiumId;
    }
  }
  
  // Define Session entity
  class Session {
    constructor(sessionId, sport, schedule, maxCapacity, gymnasiumId) {
        this.sessionId = sessionId;
        this.sport = sport;
        this.schedule = schedule;
        this.maxCapacity = maxCapacity;
        this.gymnasiumId = gymnasiumId;
    }
  }
  
  // Define Coach entity
  class Coach {
    constructor(coachId, lastName, firstName, age, specialty) {
        this.coachId = coachId;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.specialty = specialty;
    }
  }
  
  // Define SessionCoach entity (for the many-to-many relationship between Session and Coach)
  class SessionCoach {
    constructor(sessionId, coachId) {
        this.sessionId = sessionId;
        this.coachId = coachId;
    }
  }