import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // fetching data from Airtable
    // let responseFromAirtable = await fetch('https://api.airtable.com/v0/appxY2HbqVvE1PZ9t/Content?api_key=keyisZgCz6Cn5kNhb');

    // fetching data from server
    // let { records } = await responseFromAirtable.json();
    // records = records.map((record) => {
    //   if (record.fields['Header image']) {
    //     record.fields.HeaderImageUrl = record.fields['Header image'][0].url;
    //   }
    //   return record;
    // });
    // console.log(records);
    // return records;
    //
    // let response = await fetch('http://localhost:3000');
    // let data = await response.json();

    // fetching data from server using ember-data
    const data = await this.store.findAll('card');

    // console.log(data);
    return data;
  }
}
