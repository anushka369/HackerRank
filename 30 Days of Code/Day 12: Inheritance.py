class Person:
	def __init__(self, firstName, lastName, idNumber):
		self.firstName = firstName
		self.lastName = lastName
		self.idNumber = idNumber

	def printPerson(self):
		print("Name:", self.lastName + ",", self.firstName)
		print("ID:", self.idNumber)

class Student(Person):
  
    #   Class Constructor  
    #   Parameters:
    #   firstName - A string denoting the Person's first name.
    #   lastName - A string denoting the Person's last name.
    #   id - An integer denoting the Person's ID number.
    #   scores - An array of integers denoting the Person's test scores.
    
    def __init__(self, firstName, lastName, id, scores):
        super().__init__(firstName, lastName, id)
        self.testScores = scores    

    #   Function Name: calculate
    #   Return: A character denoting the grade.

    def calculate(self):
        total = 0

        for testScore in self.testScores:
            total += testScore

        avg = total / len(self.testScores)

        if 90 <= avg <= 100:
            return 'O'
            
        if 80 <= avg < 90:
            return 'E'
            
        if 70 <= avg < 80:
            return 'A'
            
        if 55 <= avg < 70:
            return 'P'
            
        if 40 <= avg < 55:
            return 'D'
            
        return 'T'

line = input().split()
firstName = line[0]
lastName = line[1]
idNum = line[2]

numScores = int(input())
scores = list( map(int, input().split()) )
s = Student(firstName, lastName, idNum, scores)
s.printPerson()
print("Grade:", s.calculate())

# Link to the problem: https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true/
