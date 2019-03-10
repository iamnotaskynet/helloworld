using System;

namespace myApp
{   
    enum EnuVar { One = 1, Two }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello C Sharp!");
            // Console.ReadLine();
            Console.WriteLine("\nPrimitives:");
            byte byteVar = 42;
            short shortVar = 42;
            int intVar = 42;
            long longVar = 42;
            const float floatVar = 3.14F;
            double dobVar = 3.14;
            decimal decVar = 3.14M;
            char character = '@';
            string str = "string";
            bool boolVar = true;
            var implicitV = "10";
            EnuVar enuVar = EnuVar.One;

            Console.WriteLine($"byteVar\t\t {byteVar} \t {byteVar.GetType()}");
            Console.WriteLine($"shortVar\t {shortVar} \t {shortVar.GetType()}");
            Console.WriteLine($"intVar\t\t {intVar} \t {intVar.GetType()}");
            Console.WriteLine($"longVar\t\t {longVar} \t {longVar.GetType()}");
            Console.WriteLine($"floatVar\t {floatVar} \t {floatVar.GetType()}");
            Console.WriteLine($"dobVar\t\t {dobVar} \t {dobVar.GetType()}");
            Console.WriteLine($"decVar\t\t {decVar} \t {decVar.GetType()}");
            Console.WriteLine($"character\t {character} \t {character.GetType()}");
            Console.WriteLine($"str\t\t {str}  {str.GetType()}");
            Console.WriteLine($"boolVar\t\t {boolVar} \t {boolVar.GetType()}");
            Console.WriteLine($"implicitV\t {implicitV} \t {implicitV.GetType()}");
            Console.WriteLine($"enuVar\t\t {enuVar} \t {enuVar.GetType()}");

            Console.WriteLine("\nConverter:");
            Console.WriteLine($"Convert.ToByte(\"42\")  {Convert.ToByte("42")}");
            Console.WriteLine($"Convert.ToInt16(\"42\") {Convert.ToInt16("42")}");
            Console.WriteLine($"Convert.ToInt32(\"42\") {Convert.ToInt32("42")}");
            Console.WriteLine($"Convert.ToInt64(\"42\") {Convert.ToInt64("42")}");
            Console.WriteLine($"Convert.ToString(42)  {Convert.ToString(42)}");

            Console.WriteLine("\nArithmetics:");
            Console.WriteLine($"x = 7 + 3 --> {7 + 3}");
            Console.WriteLine($"x = 7 - 3 --> {7 - 3}");
            Console.WriteLine($"x = 7 * 3 --> {7 * 3}");
            Console.WriteLine($"x = 7 / 3 --> {7 / 3}");
            Console.WriteLine($"x = 7 % 3 --> {7 % 3}");
            var x = 7;
            Console.WriteLine($"x = 7  --> {x}");
            Console.WriteLine($"x += 3 --> {x += 3}");x = 7;
            Console.WriteLine($"x -= 3 --> {x -= 3}");x = 7;
            Console.WriteLine($"x *= 3 --> {x *= 3}");x = 7;
            Console.WriteLine($"x /= 3 --> {x /= 3}");x = 7;
            Console.WriteLine($"x %= 3 --> {x %= 3}");x = 7;

            Console.WriteLine("\nIncrement, decrement:");
            Console.WriteLine($"x++ --> {x++}");x = 7;
            Console.WriteLine($"x-- --> {x--}");x = 7;
            Console.WriteLine($"++x --> {++x}");x = 7;
            Console.WriteLine($"--x --> {--x}");x = 7;

            Console.WriteLine("\nRelational:");
            Console.WriteLine($"x == 6 --> {x == 6}");
            Console.WriteLine($"x != 6 --> {x != 6}");
            Console.WriteLine($"x >= 6 --> {x >= 6}");
            Console.WriteLine($"x <= 6 --> {x <= 6}");
            Console.WriteLine($"x > 6 --> {x > 6}");
            Console.WriteLine($"x < 6 --> {x < 6}");

            Console.WriteLine("\nCondition if-else:");
            if(boolVar) Console.WriteLine("In if block");
            else if(boolVar) Console.WriteLine("In else if block");
            else Console.WriteLine("In else block");

            Console.WriteLine("\nCondition switch:");
            switch (intVar)
            {
                case 42:
                    Console.WriteLine("In switch case.");
                    break;
                default:
                    Console.WriteLine("In switch default.");
                    break;
            }
            Console.WriteLine("\nCondition ternary:");
            Console.WriteLine($"5 > 4 ? \"yep\" : \"nope\" --> {5 > 4 ? "yep" : "nope"}");

            Console.WriteLine("\nLoop while:");
            int iterator = 0;
            while(iterator++ <= 10) Console.Write($"{iterator} ");


            Console.WriteLine("\n\nLoop do-while:");
            iterator = 0;
            do Console.Write($"{iterator} ");
            while(++iterator <= 10);

            Console.WriteLine("\n\nLoop for:");
            for (int i = 0; i < 10; i++){
                if(i == 5) continue;
                else if(i == 8) break;
                Console.Write($"{i} ");
            }
            Console.WriteLine("\n\nLoop foreach in array:");
            int[] intArr = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
            foreach (var value in intArr)
            {
                Console.Write(value + " ");
            }
            
            Console.WriteLine("\n\nLogic:");
            Console.WriteLine($"false && false --> {false && false}");
            Console.WriteLine($"true  && false --> {true && false}");
            Console.WriteLine($"true  && true  --> {true && true}");
            Console.WriteLine($"false || false --> {false || false}");
            Console.WriteLine($"true  || false --> {true || false}");
            Console.WriteLine($"true  || true  --> {true || true}");
            Console.WriteLine($"!true  --> {!true}");
            Console.WriteLine($"!false --> {!false}");

            Console.WriteLine("\nAcces modifires:");
            Console.WriteLine("\tprivate");
            Console.WriteLine("\tprotected");
            Console.WriteLine("\titernal");
            Console.WriteLine("\tpublic");

            //cheked throw exception if it has, 

            checked
            {
                //do something what can throw an exception
            }
        }
    }
}