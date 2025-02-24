class Difference:
    def __init__(self, a):
        self.__elements = a
	
    def computeDifference(self):
        maximum = 0

        for i in range(len(self.__elements)):
            for j in range(len(self.__elements)):
                absolute = abs(self.__elements[i] - self.__elements[j])
              
                if absolute > maximum:
                    maximum = absolute

        self.maximumDifference = maximum
# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)

# Link to the problem: https://www.hackerrank.com/challenges/30-scope/problem?isFullScreen=true/
