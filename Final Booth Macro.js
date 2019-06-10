const xapi = require('xapi');

//Listen for In-room control actions
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  //Someone pressed and released a button
  if (event.Type == 'released') {
    console.log(event.WidgetId);
    //Check which button was released
    switch(event.WidgetId) {
      //If the button was 'COMP1', then do this
      case 'COMP1':
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'1', 
          SourceID:'4', 
        });
         xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'2', 
          SourceID:'2', 
        });
         xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'3', 
          SourceID:'3', 
        });
      break;
      case 'COMP2':
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'1', 
          SourceID:[5,2], 
        });
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'2', 
          SourceID:[3,4], 
        });
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'3', 
          SourceID:[5,1], 
        });
      break;
      case 'COMP3':
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'1', 
          SourceID:'4', 
        });
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'2', 
          SourceID:[2,3,4,5], 
        });
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'3', 
          SourceID:'1', 
        });
      break;
      case 'COMPcall':
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'1', 
          RemoteMain:'1', 
        });
         xapi.command('video matrix assign', {
          Layout:'prominent',
          Mode:'replace',
          Output:'2', 
          SourceID:[2,3,4,5], 
        });
        xapi.command('video matrix assign', {
          Layout:'equal',
          Mode:'replace',
          Output:'3', 
          SourceID:'1',
          RemoteMain:'1', 
        });
      break;
      case 'COMPR':
        xapi.command('Video Matrix Reset');
      break;
    }  
  }
});