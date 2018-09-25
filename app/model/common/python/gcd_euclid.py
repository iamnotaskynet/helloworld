
def gcd(a:int, b:int):
	if a==b:
		return a
	elif a>b:
		return gcd(a-b,b)
	else:
		return gcd(a,b-a)


a = int(input("input a:"))
b = int(input("input b:"))
print(gcd(a,b))