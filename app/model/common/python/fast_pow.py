
def pow(a:int, n:int):
	if n==0:
		return 1
	elif n>1 and n%2==1:
		return a*pow(a,n-1)
	elif n>1 and n%2==0:
		return pow(a*a, n//2)
	elif n==1:
		return a*1

a = int(input("input some number:"))
n = int(input("input exponentiation:"))

print("Result: %s" % pow(a, n))