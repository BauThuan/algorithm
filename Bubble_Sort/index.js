function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
                    swapped = true;
        }
      }
        if (!swapped) break;
    }
  
    return arr;
  }
  
  // Ví dụ
  const array = [5, 3, 8, 4, 2];
  console.log("Mảng trước khi sắp xếp:", array);
  console.log("Mảng sau khi sắp xếp:", bubbleSort(array));
  