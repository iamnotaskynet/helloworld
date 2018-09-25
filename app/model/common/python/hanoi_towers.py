def show_towers(arr:list):
	for x in range(0, 3, 1):
		print(arr[0][x],arr[1][x],arr[2][x], sep="\t")

def put_to_win(arr:list):
	"""	Result must corectly
		put numbers in second inner list,
		and each iteration of reputing some number
		must be corect.
	"""
		
	# TODO

	#pass
	return arr


hanoi_start = [[1,2,3],
	[0,0,0],
	[0,0,0]]

show_towers(hanoi_start)
print("Calculating")

print("Result")
hanoi_end = put_to_win(hanoi_start)
show_towers(hanoi_end)