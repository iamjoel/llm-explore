/*
name; input; output
*/
/*
* sum
* input: number, number
* output: number
*/
export const sum = (a: number, b: number): number => {
  return a + b;
}

const testSum = () => {
  const result = sum(1, 2);
  console.log(result);
}
// sum test use jest
// describe('sum', () => {
//   it('should sum 2 numbers', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
//   // test exception
//   it('should throw an error if one of the inputs is not a number', () => {
//     expect(() => sum(1, '2')).toThrow();
//   }
// });

// function arrayItemToCamel(item: string): string {
//   //
//   return item.charAt(0).toUpperCase() + item.slice(1);
// }

/*
* compareNumber
* if a > b return 1
* equal return 0
* else return -1
*/
export const compareNumber = (a: number, b: number): number => {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
}

// users list.Item of the list it has properties: name, age. Mock 3 user data.
const users = [ 
  { name: 'John', age: 25 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 },
];

// sort users by age
const resUsers = users.sort((a, b) => a > b ? 1 : -1);
// filter users by age > 28
const filterUsers = users.filter(user => user.age > 28);

/* students list. 
* Item struct: {id: 1, name: 'John', age: 25, teacherId: 1, grade: 1, classId: 1}
* mock 5 students data
*/
const students = [
  { id: 1, name: 'John', age: 25, teacherId: 1, grade: 1, classId: 1 },
  { id: 2, name: 'Pete', age: 30, teacherId: 1, grade: 1, classId: 1 },
  { id: 3, name: 'Mary', age: 28, teacherId: 1, grade: 1, classId: 1 },
  { id: 4, name: 'John', age: 25, teacherId: 1, grade: 1, classId: 1 },
  { id: 5, name: 'Pete', age: 30, teacherId: 1, grade: 1, classId: 1 },
]

// 对 students 用快速排序算法排序
const partition = (arr: any[], left: number, right: number) => {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (compareNumber(arr[j], pivot) === -1) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  const temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;
}

// 将 ts 代码转换为 js 代码
// ts 代码
// 给 quickSort 函数添加函数说明的注释：
// 快速排序
const quickSort = (arr: any[], left: number, right: number) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}
// 注释
// js 代码
// const quickSort = (arr, left, right) => {
//   if (left < right) {
//     const pivot = partition(arr, left, right);
//     quickSort(arr, left, pivot - 1);
//     quickSort(arr, pivot + 1, right);
//   }
// }


// 将上面的函数 quickSort 改成更可读的形式。函数名重命名为 quickSortNew
// const quickSortNew = (arr: any[], left: number, right: number) => {
//   if (left < right) {
//     const pivot = partition(arr, left, right);
//     quickSortNew(arr, left, pivot - 1);
//     quickSortNew(arr, pivot + 1, right);
//   }
// }


const arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1)

// 用公开的 API 来获取一张随机图片地址。调用公开API 用 fetch 来实现。
// https://picsum.photos/200/300
const getRandomImage = async () => {
  const response = await fetch('https://picsum.photos/200/300');
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  return url;
}

// 用公开的 API 来获取宠物狗的名称。调用公开API 用 fetch 来实现。
// https://dog.ceo/api/breeds/list/all
const getDogNames = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  return data.message;
}

// 把 hello 所有字母都转换成大写：HELLO
/* 
把<text>里的内容全部转换成大写。
<text>
Generative AI coding tools are transforming the way developers approach daily coding tasks. From documenting our codebases to generating unit tests, these tools are helping to accelerate our workflows. However, just like with any emerging tech, there’s always a learning curve. As a result, developers—beginners and experienced alike— sometimes feel frustrated when AI-powered coding assistants don’t generate the output they want. (Feel familiar?)
</text>
转化结果：
*/ 


// Rewrite this as a React component
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);
var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = function() {
  var name = input.value;
  var hello = document.createElement('div');
  hello.innerHTML = 'Hello ' + name;
  document.body.appendChild(hello);
};

// React version:
// const Hello = () => {
//   const [name, setName] = useState('');
//   return (
//     <div>
//       <input type="text" value={name} onChange={e => setName(e.target.value)} />
//       <button onClick={() => alert(`Hello ${name}`)}>Say Hello</button>
//     </div>
//   )
// }
