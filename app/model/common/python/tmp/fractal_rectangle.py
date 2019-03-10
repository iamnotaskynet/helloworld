from graphics import *

alpha = 0.05
window_sizes = 600
window_width = window_sizes
window_height = window_sizes

def main():
	
	win.setBackground(color_rgb(26, 29, 29))
	
	fractal_rectangle((window_sizes*alpha, 0),
					(window_sizes, window_sizes*alpha), 
					(window_sizes - window_sizes*alpha, window_sizes), 
					(0, window_sizes - window_sizes*alpha))
	
	win.getMouse()

	

def fractal_rectangle(a, b, c, d, deep=100):
	
	ln1 = Line(Point(a[0],a[1]), Point(b[0],b[1]))
	ln2 = Line(Point(b[0],b[1]), Point(c[0],c[1]))
	ln3 = Line(Point(c[0],c[1]), Point(d[0],d[1]))
	ln4 = Line(Point(d[0],d[1]), Point(a[0],a[1]))

	ln1.setFill('grey')
	ln2.setFill('grey')
	ln3.setFill('grey')
	ln4.setFill('grey')

	ln1.draw(win)
	ln2.draw(win)
	ln3.draw(win)
	ln4.draw(win)

	A1 = (a[0]*(1-alpha) + b[0]*alpha, a[1]*(1-alpha) + b[1]*alpha) 
	B1 = (b[0]*(1-alpha) + c[0]*alpha, b[1]*(1-alpha) + c[1]*alpha)
	C1 = (c[0]*(1-alpha) + d[0]*alpha, c[1]*(1-alpha) + d[1]*alpha)
	D1 = (d[0]*(1-alpha) + a[0]*alpha, d[1]*(1-alpha) + a[1]*alpha)

	if deep > 1:
		fractal_rectangle(A1, B1, C1, D1, deep - 1)

	#return rc

win = GraphWin("FRECTANGLE", window_width, window_height)
main()