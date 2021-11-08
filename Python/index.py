# https://www.online-python.com/
number = 2

def print_aux(operacion, a, b, result):
    print("El resultado de la " + operacion + " entre " + str(a) + " y " + str(b) + " es " + str(result))

def sum(a, b):
    result = a + b
    print_aux("suma", a, b, result)
    result

def substraction(a, b):
    result = a - b
    print_aux("resta", a, b, result)
    result

def times(a, b):
    result = a * b
    print_aux("multiplicacion", a, b, result)
    result

def division(a, b):
    if b == 0:
        print("Math error")
        return "Math error"
    result = float(a) / b
    print_aux("division", a, b, result)
    result

def greater_than(a, b):
    if a > b:
        return a
    else:
        return b

#print("El mayor es " + str(greater_than(5,6)))

def fibonacci(n):
    if n <= 0:
        print("error")
        return "error"
    a = 0
    b = 1
    if n <= 2:
        print(n-1)
    aux = 0
    print(0)
    for i in range(n-1):
        aux = b
        b = a + b
        a = aux
        print(aux)



# Funcion que retorne el MCM
# Fibonacci recursivo

#sum(5,7)
#times(5,6)
#substraction(8,9)
#division(1,0)
#division(8,3)
#fibonacci(8)

print(range(5))
print(range(-2,5))
print(range(3,6))
print(range(1,10,2))
print(range(10,1))
print(range(1,10,-1))
