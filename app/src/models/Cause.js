export class Cause {
  constructor(title, description, image,neededFund,email) {
        this.title = title,
        this.description = description,
        this.image = image,
        this.neededFund = neededFund,
        this.creatorEmail = email,
        this.donors =[],
        this.collectedFund = 0
  }
}
