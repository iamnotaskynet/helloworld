const Card1 = {
//--------------------------------left side
	"left":`
<xmp>
x = "Hello world Python"
print(x)
# ------------------------------
print("\nTypes of data:")
print(type(42))
print(type(0b1010))
print(type(99111999111999111999111999))
print(type(3.14))
print(type('a'))
print(type( (1,2,3) ))
print(type( {} ))
print(type( {1,2,3} ))
print(type(["b", 42, 3.14]))
# ------------------------------
print("\nArifmetics priority:")
print("Exponent \t **")
print("Unar minus \t -")
print("Multiplication \t *")
print("Division \t /")
print("Floor div \t //")
print("Modulus \t %")
print("Addition \t +")
print("Substraction \t -")
#---------------------------------
print("\nConditions:")
condition = 2
if condition==2 :
	print("If condition is 2")
elif condition==1 :
	print("Elif condition is 1")
else :
	print("Else condition ")
#------------------------------------
print("\nLoops:")
# loop while
condition = True
while condition :
	#iteration
	print("Loop While")
	condition = False
else :
	print("Loop while else")
# loop for
print("For loop from 1 to 10:")
#range(start, stop, step)
n = range(1, 11, 1)
for x in n :
	print(x, end=' ')
#--------------------------------------------------------
print("\n\nLogic operations:")
print("operator \t x \t y \t equals")
# print("\n")
print("not \t\t False \t \t %s" % (not False))
print("not \t\t True \t \t %s" % (not True))
# print("\n")
print("and \t\t False \t False \t %s" % (False and False))
print("and \t\t True \t False \t %s" % (True and False))
print("and \t\t False \t True \t %s" % (False and True))
print("and \t\t True \t True \t %s" % (True and True))
# print("\n")
print("or \t\t False \t False \t %s" % (False or False))
print("or \t\t True \t False \t %s" % (True or False))
print("or \t\t False \t True \t %s" % (False or True))
print("or \t\t True \t True \t %s" % (True or True))
# print("\n")
print("is \t\t False \t False \t %s" % (False is False))
print("is \t\t True \t False \t %s" % (True is False))
print("is \t\t False \t True \t %s" % (False is True))
print("is \t\t True \t True \t %s" % (True is True))

# print("\n")
print("\nBitwise operations:")
# print("\n")
print("<< \t\t 0b0 \t 0b0 \t %s" % (0b0 << 0b0))
print("<< \t\t 0b1 \t 0b0 \t %s" % (0b1 << 0b0))
print("<< \t\t 0b0 \t 0b1 \t %s" % (0b0 << 0b1))
print("<< \t\t 0b1 \t 0b1 \t %s" % (0b1 << 0b1))
# print("\n")
print(">> \t\t 0b0 \t 0b0 \t %s" % (0b0 >> 0b0))
print(">> \t\t 0b1 \t 0b0 \t %s" % (0b1 >> 0b0))
print(">> \t\t 0b0 \t 0b1 \t %s" % (0b0 >> 0b1))
print(">> \t\t 0b1 \t 0b1 \t %s" % (0b1 >> 0b1))
# print("\n")
print("& \t\t 0b0 \t 0b0 \t %s" % (0b0 & 0b0))
print("& \t\t 0b1 \t 0b0 \t %s" % (0b1 & 0b0))
print("& \t\t 0b0 \t 0b1 \t %s" % (0b0 & 0b1))
print("& \t\t 0b1 \t 0b1 \t %s" % (0b1 & 0b1))
# print("\n")
print("| \t\t 0b0 \t 0b0 \t %s" % (0b0 | 0b0))
print("| \t\t 0b1 \t 0b0 \t %s" % (0b1 | 0b0))
print("| \t\t 0b0 \t 0b1 \t %s" % (0b0 | 0b1))
print("| \t\t 0b1 \t 0b1 \t %s" % (0b1 | 0b1))
# print("\n")
print("^ \t\t 0b0 \t 0b0 \t %s" % (0b0 ^ 0b0))
print("^ \t\t 0b1 \t 0b0 \t %s" % (0b1 ^ 0b0))
print("^ \t\t 0b0 \t 0b1 \t %s" % (0b0 ^ 0b1))
print("^ \t\t 0b1 \t 0b1 \t %s" % (0b1 ^ 0b1))
# print("\n")
print("~ \t\t 0b0 \t \t %s" % (~ 0b0))
print("~ \t\t 0b1 \t \t %s" % (~ 0b1))
# range

#functions------------------------------------------------------

def hello_world(parameter = " native parameter"):
	""" Documentation function hello_world """
	print("helloWorld function %s" % parameter) 
	# pass
func_hw = hello_world
func_hw("parameter")

def hello_world_1(name,separator):
	""" Documentation function hello_world_1 """
	print("hello", "world", name, "NAME", sep=separator)
hello_world_1("PYTHONIST",separator="_")
#--arrays--as--list--type--------------------------
for x in ['h','e','l','l','o',' ','w','o','r','l','d',' ']:
	print(x, end='')
for x in [1,2,3,4,5,6,7,8,9,10]:
	print(x, end=' ')
print()
arr_hw = ['h','e','l','l','o',' ','w','o','r','l','d',' ']

for x in range(0, len(arr_hw), 1):
	print(x, arr_hw[x], sep='-', end=' ')
print()

List = list(['h','e','l','l','o',' ','w','o','r','l','d'])
print(List)
#--list comprehension-------------------------------
A = [4, 5, 2, 7, 23, 13, 14, 54, 32, 7]

B = [x**2 for x in A if x%2==0]
print(B)
print('\n')
#-------------------------------------------------
Arr = []

print("Array length before append: %s" % len(Arr))
print(Arr)
Arr.append(5)
print("Array length after append: %s" % len(Arr))
print(Arr)
Arr.append(7)
print("Array length before pop: %s" % len(Arr))
print(Arr)
Arr.pop()
print("Array length after pop: %s" % len(Arr))
print(Arr)
</xmp>
	`,
//xmp against &lt; &gt;
//----------------------------------right side
	"right":`
	<img src='/app/model/common/python/terminalRecord.gif'>
	`
}
export {Card1};