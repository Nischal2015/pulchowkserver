/**
 * Returns the object from name array
 * @param name An array representing a fullname
 * @returns The fullname in object form
 */
const getFullName = (name: string[]) => ({
  firstname: name[0],
  middlename: name.length < 3 ? '' : name[1],
  lastname: name[name.length - 1],
});

/**
 * Returns the student data
 * @param datas Student data returned by college api
 * @returns Student data in proper object form
 */
export const studentJsonFormatAPIData = (datas: string[][]) => {
  return datas.map((data) => {
    const fullName = data[3].split(' ');
    const name = getFullName(fullName);

    return {
      ...name,
      batch: data[0],
      prog: data[1],
      roll: data[2],
    };
  });
};
