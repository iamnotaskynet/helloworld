#include <iostream>
#include <typeinfo> //to use typeid() 
#include <limits> //std::numeric_limits<type>::max()
#include <string> 


void showDataTypes();
void showASCIIsymbols();
void showStringEssential();

int main()
{	
	std::cout << "Hello C++!" << std::endl;
	//std::cin >> toSomething;
	
	//showDataTypes();
	showASCIIsymbols();


	
}

void showDataTypes() {

	/* Data types */
	std::cout << "\nData types:" << std::endl;

	int intVar = 42;
	signed int sigInt = 43;
	unsigned int unsInt = 44;

	std::cout << "intVar: \t" << intVar << "\t" << typeid(intVar).name() <<"\t" << sizeof (int)  << "\t" << std::numeric_limits<int>::max() << std::endl;
	std::cout << "sigInt: \t" << sigInt << "\t" << typeid(sigInt).name() <<"\t" << sizeof (signed int)  << "\t" << std::numeric_limits<signed int>::max() << std::endl;
	std::cout << "unsInt: \t" << unsInt << "\t" << typeid(unsInt).name() <<"\t" << sizeof (unsigned int)  << "\t" << std::numeric_limits<unsigned int>::max() << std::endl;

	short int shoInt = 45;
	signed short int sshInt = 46;
	unsigned short int ushInt = 47;

	std::cout << "shoInt: \t" << shoInt << "\t" << typeid(shoInt).name() <<"\t" << sizeof (short int)  << "\t" << std::numeric_limits<short int>::max() << std::endl;
	std::cout << "sshInt: \t" << sshInt << "\t" << typeid(sshInt).name() <<"\t" << sizeof (signed short int)  << "\t" << std::numeric_limits<signed short int>::max() << std::endl;
	std::cout << "ushInt: \t" << ushInt << "\t" << typeid(ushInt).name() <<"\t" << sizeof (unsigned short int)  << "\t" << std::numeric_limits<unsigned short int>::max() << std::endl;

	long int lonInt = 48;
	signed long int sloInt = 49;
	unsigned long int uloInt = 50;

	std::cout << "lonInt: \t" << lonInt << "\t" << typeid(lonInt).name() <<"\t" << sizeof (long int) << "\t" << std::numeric_limits<long int>::max() << std::endl;
	std::cout << "sloInt: \t" << sloInt << "\t" << typeid(sloInt).name() <<"\t" << sizeof (signed long int) << "\t" << std::numeric_limits<signed long int>::max() << std::endl;
	std::cout << "uloInt: \t" << uloInt << "\t" << typeid(uloInt).name() <<"\t" << sizeof (unsigned long int) << "\t" << std::numeric_limits<unsigned long int>::max() << std::endl;

	char chaVar = '?';
	signed char sigCha = '@';
	unsigned char unsCha = '#';

	std::cout << "chaVar: \t" << chaVar << "\t" << typeid(chaVar).name() <<"\t" << sizeof (char) << "\t" << std::numeric_limits<char>::max() << std::endl;
	std::cout << "sigCha: \t" << sigCha << "\t" << typeid(sigCha).name() <<"\t" << sizeof (signed char) << "\t" << std::numeric_limits<signed char>::max() << std::endl;
	std::cout << "unsCha: \t" << unsCha << "\t" << typeid(unsCha).name() <<"\t" << sizeof (unsigned char) << "\t" << std::numeric_limits<unsigned char>::max() << std::endl;

	float floVar = 3.14;
	double douVar = 1.4F;
	long double lonDob = 1.1F;

	std::cout << "floVar: \t" << floVar << "\t" << typeid(floVar).name() <<"\t" << sizeof (float) << "\t" << std::numeric_limits<float>::max() << std::endl;
	std::cout << "douVar: \t" << douVar << "\t" << typeid(douVar).name() <<"\t" << sizeof (double) << "\t" << std::numeric_limits<double>::max() << std::endl;
	std::cout << "lonDob: \t" << lonDob << "\t" << typeid(lonDob).name() <<"\t" << sizeof (long double) << "\t" << std::numeric_limits<long double>::max() << std::endl;

	bool boolVa = true;
	std::cout << "boolVa: \t" << boolVa << "\t" << typeid(boolVa).name() <<"\t" << sizeof (bool) << "\t" << std::numeric_limits<bool>::max() << std::endl;

	wchar_t wchart = 'W';
	std::cout << "wchart: \t" << wchart << "\t" << typeid(wchart).name() <<"\t" << sizeof (wchar_t) << "\t" << std::numeric_limits<wchar_t>::max() << std::endl;

	char16_t char16 = 't';
	char32_t char32 = 'o';
}

void showASCIIsymbols() {
	for(int iter = 0; iter < 128; iter++) {
		char ch1 = iter;
		char ch2 = iter + 128;
		std::cout << iter << "\t" << ch1 << "\t" << iter + 128 << "\t" << ch2 << std::endl;
	}
}

void showStringEssential() {
	std::string str{"Hello string!"};
}