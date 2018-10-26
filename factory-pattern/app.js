// factory pattern

function MemberFactory(){
    this.createMember = function(name,type){
        let member;
        if(type === 'simple'){
            member = new SimpleMembership(name);
        }else if(type === 'standard'){
            member = new StandardMembership(name);
        }else if(type === 'super'){
            member = new SuperMembership(name);
        }
        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }

}
//defining membership constructors
const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$50';
}
const StandardMembership = function(name){
    this.name = name;
    this.cost = '$150';
}
const SuperMembership = function(name){
    this.name = name;
    this.cost = '$500';
}


//all memebers are stored in members array
const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Avi','simple'));
members.push(factory.createMember('Ekam','super'));
members.push(factory.createMember('Dimple','super'));
members.push(factory.createMember('Shunty','standard'));

members.forEach(function(member){
    member.define();
});