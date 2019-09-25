import brainRetro from 'brain.retro.js';

//const input = brainRetro(output, brainNeuralNetwork);

 
class retro1 {
  brainNetwork=Object;

  constructor(bNetwork){
    this.brainNetwork  = bNetwork;

  }


  findInput( existingOutput) {
    const input = brainRetro(existingOutput, this.brainNetwork );
    //console.log(this.brainNetwork);
    //
    //const input = brainRetro({output:[0.11]}, this.brainNetwork );

    return input;

  }


}

export class retro2 {

}

export default retro1;
