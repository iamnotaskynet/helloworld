//import UIKit
import Foundation
// single line comment
/* 
multi line
comment
*/
let swift_version = 4.2 //constant
print("Hello, Swift  \(swift_version) !")

print("\nTypes:")
var integerNum: Int = 42
var floatNum: Float = 3.14
var doubleNum: Double = 3.14
var boolVar: Bool = true
var stringVar: String = "string"
var charVar: Character = "C"

print("integerNum \t\(integerNum)\t", type(of: integerNum))
print("floatNum \t\(floatNum)\t", type(of: floatNum))
print("doubleNum \t\(doubleNum)\t", type(of: doubleNum))
print("boolVar \t\(boolVar)\t", type(of:boolVar))
print("stringVar \t\(stringVar)\t", type(of:stringVar))
print("charVar \t\(charVar)\t", type(of:charVar))

print("\nRange 1...10 --> ", (1...10))

print("\nArithmetics:")
print("integerNum + 5 --> ", (integerNum + 5))
print("integerNum - 5 --> ", (integerNum - 5))
print("integerNum / 5 --> ", (integerNum / 5))
print("integerNum * 5 --> ", (integerNum * 5))
print("integerNum % 5 --> ", (integerNum % 5))

print("\nComparison:")
print("true == true -->", true == true)
print("true != true -->", true != true)
print("1 == 2 -->", 1 == 2)
print("1 != 2 -->", 1 != 2)
print("1 >  2 -->", 1 > 2)
print("1 >= 2 -->", 1 >= 2)
print("1 <  2 -->", 1 < 2)
print("1 <= 2 -->", 1 <= 2)

print("\nLogic:")
print("!true  --> ",!true)
print("!false --> ",!false)
print("true  && true  -->",true  && true)
print("true  && false -->",true  && false)
print("false && false -->",false && false)
print("true  || true  -->",true  || true)
print("true  || false -->",true  || false)
print("false || false -->",false || false)
var trueVal = true, falsVal = false
print("\nCondition ternary:")
print("true  ? \"true\" : \"false\" -->", trueVal  ? "true" : "false")
print("false ? \"true\" : \"false\" -->", falsVal ? "true" : "false")

print("\nCondition if:")
if trueVal {print("in if true block")}
else {print("in if false block")}

print("\nCondition switch:")
switch integerNum {
    case 42: print("foreseeken case")
    default: print("not foreseeken case")
}

print("\nCondition switch fallthrough:")
switch integerNum {
    case 42: print("foreseeken case"); fallthrough
    case 43: print("fallthrough'en case")
    default: print("default case")
}

var anyPoint = (12,13)
print("\nCondition switch where:")
switch anyPoint {
    case let(x,y) where x<y: print("foreseeken case where"); break;
    default: print("not foreseeken case"); break;
}

print("\nLoop while:")
var iterator: Int = 0
while iterator < 10 {print(iterator, terminator:" "); iterator+=1}

print("\n\nLoop repeat while:")
iterator = 0
repeat {print(iterator, terminator:" "); iterator+=1}
while iterator < 10 

print("\n\nLoop for:")
for iterator in 1...10 {
    if iterator == 5 {continue}
    else if iterator == 8 {break}
    print(iterator, terminator:" ")
}

print("\n\nStrings:")
print("\"\".isEmpty --> ","".isEmpty)
print("\"length count\".count --> ","length count".count)
let interpolation: String = "interpolated"
print("This is \(interpolation) string")

iterator = 0
print("\nArrays:")
var arrInt = [Int](repeating: 1, count: 4)
print("arrInt  \t\t\(arrInt)\t", type(of:arrInt))
arrInt.append(10) // arrInt += [10]
print("arrInt.append(10)  \t\(arrInt)\t")
arrInt[1...2] = [3]
print("arrInt[1...2] = [3]  \t\(arrInt)\t")
arrInt.insert(4, at:0)
print("arrInt.insert(4, at:0)  \(arrInt)\t")
arrInt.remove(at:0)
print("arrInt.remove(at:0)  \t\(arrInt)\t")
arrInt.removeLast()
print("arrInt.removeLast()  \t\(arrInt)\t")
func backwards(i1: Int, i2: Int) -> Bool { return i1 > i2}
print("arrInt.sorted(by: backwards)  \t\(arrInt.sorted(by: backwards))\t")
print("arrInt.sorted(by: {i1,i2 in i1 > i2}) \t\(arrInt.sorted(by: {i1,i2 in i1 > i2}))\t")
print("arrInt.sorted(by: {$0 > $1}) \t\(arrInt.sorted(by: {$0 > $1}))\t")
print("arrInt.sorted(by: >) \t\(arrInt.sorted(by: >))\t")
print("\nFor loop though array:")
for (index, value) in arrInt.enumerated() {
    print("Item \(index + 1): \(value)",terminator:" ")
}

print("\n\nSets:")
var setOfInt: Set<Int> = [1,2,2,3,1,2]
print(setOfInt) //[1, 3, 2]
print("sesetOfInt.contains(1) --> ",setOfInt.contains(1))
print("\nFor loop though set:", terminator:" ")
for item in setOfInt.sorted() {print(item, terminator:" ")}

var setA: Set<String> = ["A","B","C","D"]
var setB: Set<String> = ["C","D","E","F"]
var setC: Set<String> = ["A","B"]

print("\n\nSets methods:")
print("setA.intersection(setB)",setA.intersection(setB))
print("setA.symmetricDifference(setB)",setA.symmetricDifference(setB))
print("setA.union(setB)",setA.union(setB))
print("setA.subtracting(setB)", setA.subtracting(setB))
print("setA.isSuperset(of:setC)",setA.isSuperset(of:setC))
print("setC.isSubset(of:setA)",setC.isSubset(of:setA))
print("setA.isStrictSuperset(of:setC)",setA.isStrictSuperset(of:setC))
print("setC.isStrictSubset(of:setA)",setC.isStrictSubset(of:setA))
print("setC.isDisjoint(with:setB)",setC.isDisjoint(with:setB))

print("\nDictionaries:")
var dict1: [String:String] = ["key":"value"]
print(dict1)
print("Dictionaries methods:")
dict1.updateValue("VALUE", forKey:"key")
print("dict1.updateValue(\"VALUE\", forKey:\"key\") -->", dict1)
dict1.removeValue(forKey:"key")
print("dict1.removeValue(forKey:\"key\") -->", dict1)

print("\nTuples:")
var tuple1 = (42, "hello", 3.14)
print(tuple1)

print("\nEnumerations:")
enum NameOfEnum {case Name1, Name2, Name3}
print(NameOfEnum.Name1)

func sayHello(parametr: String) -> String {
   let greeting = "\nHello, " + parametr + "!"
   return greeting
}
print(sayHello(parametr:"Swift functions"))

func funcExtIntParam(extParam intParam: String) {
    print("Hello \(intParam) parametr!")
}
funcExtIntParam(extParam: "external")

var variableInout = "Hello "
func changeInoutValue(param: inout String){
    param += "inout param!"
}
changeInoutValue(param: &variableInout)
print(variableInout)

print("\nStructures:")
struct SomeStruct {
    var a: String, b: String
    mutating func show(){
        self.a = "Hello"
        self.b = " mutating!"
    }
}
var someStruct1 = SomeStruct(a: "Hello", b: "Hello")
var someStruct2 = someStruct1
someStruct2.b = " structures!"
print(someStruct1.b + someStruct2.b)
someStruct2.show()
print(someStruct1.b + someStruct2.b)

struct AnotherStruct {
    var s1: String = "*"
    var getset: String {
        get {
            return s1 + "get set!"
        }
        set {
            s1 = "Hello "
        }
    } 
    
}
var anotherStruct = AnotherStruct()
print(anotherStruct.s1 ,    terminator: "-")
print(anotherStruct.getset ,    terminator: "-")
print(anotherStruct.getset = "",    terminator: "-")
print(anotherStruct.getset ,    terminator: "-")

struct NewStruct {
    var str: String
    subscript(str1: String) -> String {
        return self.str + str1
    }
}
var newStruct = NewStruct(str: "\nHello")
print(newStruct[" subscript!"])

print("\n\nClasses:")
class SomeClass {
    lazy var a: String = String("Hello(lazy)")
    var b: String = "Hello" 
}
var instance1 = SomeClass()
var instance2 = instance1
instance2.b = " classes!"
print(instance1.a + instance2.b)

print("instance1 === instance2 -->",instance1 === instance2)

class newClass1 {
    var str = String() {
        willSet { print("str (\(str)) willSet") }
        didSet { print("str (\(str)) didSet") }
    }
}
var newInstance = newClass1()
newInstance.str = "Hello"

class newClass2 { static var prop = "static"}
print("Hello \(newClass2.prop) propery without instance!")

class newClass3 {
    var str = "self"
    func show(str: String){ print("Hello \(self.str) !") }
}
var newInstance1 = newClass3()
newInstance1.show(str: "world")

class SuperClass { var name = "Inheritance!"}
class SubClass: SuperClass {func show(){ print("Hello \(self.name)") }}
var instance3 = SubClass()
instance3.show()
class SubSubClass: SubClass { override func show(){ print("Hello override!") } }
var instance4 = SubSubClass()
instance4.show()

class ClassRequiredInit { required init(){}}
class MustImplementInit: ClassRequiredInit {
    required init(){ print("Hello implemented required init()!") }
    deinit { print("Hello deinit!") }
}
var instance5: MustImplementInit?  = MustImplementInit()
instance5 = nil
