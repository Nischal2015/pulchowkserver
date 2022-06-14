export const studentJsonFormatAPIData = (datas) => {
  return datas.map((data) => {
    const fullName = data[3].split(' ');
    let name = {} as {
      firstname: string;
      middlename: string;
      lastname: string;
    };
    if (fullName.length === 3) {
      name = {
        firstname: fullName[0],
        middlename: fullName[1],
        lastname: fullName[2],
      };
    } else {
      name = {
        firstname: fullName[0],
        middlename: '',
        lastname: fullName[1],
      };
    }

    return {
      ...name,
      batch: data[0],
      prog: data[1],
      roll: data[2],
    };
  });
};
