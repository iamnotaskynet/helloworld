
def factorial(num:int):
	assert num >= 0 , "Negative factorial is wrong"
	if (num == 0):
		return 1
	elif (num < 0):
		return factorial_negative(num)
	elif (num > 0):
		return factorial_positive(num)

def factorial_positive(num:int):
	if (num > 1) :
		fact = factorial_positive(num - 1)
		return factorial_positive(num - 1) * num
	elif num == 1 :
		return 1

def factorial_negative(num:int):
	if (num < -1) :
		fact = factorial_negative(num + 1)
		return fact*num
	elif num == -1 :
		return -1
x = int(input("Input your number: "))
print(factorial(x))