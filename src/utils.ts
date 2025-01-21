export function getPropertyData(obj: any) {
  let data: { [key: string]: any } = {};
  for (const property in obj) {
    data[property] = (obj as any)[property];
  }
  console.log(data);
  let new_data = JSON.parse(JSON.stringify(data));
  console.log(new_data);
  for (const key in new_data) {
    if (typeof new_data[key] === 'object' && new_data[key] !== null && Object.keys(new_data[key]).length === 0) {
      delete new_data[key];
    }
  }
  return new_data;
}
export function hash(str: string) {
  let hash = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}
