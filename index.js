class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const newDate = new Date(year);
    return newDate - this.startDate 
  }
}

