import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // let responseFromAirtable = await fetch('https://api.airtable.com/v0/appxY2HbqVvE1PZ9t/Content?api_key=keyisZgCz6Cn5kNhb');
    // let { records } = await responseFromAirtable.json();
    // records = records.map((record) => {
    //   if (record.fields['Header image']) {
    //     record.fields.HeaderImageUrl = record.fields['Header image'][0].url;
    //   }
    //   return record;
    // });
    // console.log(records);
    // return records;

    let response = (await fetch('http://localhost:3000'));
    let data = await response.json();
    console.log(data);
    return data;
  }
}
