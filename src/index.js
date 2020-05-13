class Character {
  constructor(props) {
    this.name = props.name
    this.hp = props.hp
    this.initialHp = props.initialHp
    this.mp = props.mp
    this.offensePower = props.offensePower
    this.defencePower = props.defencePower
  }

  showStatus() {
    /* 
      キャラクターの名前、HP、MPを表示する。
    */
    const mainEl = document.getElementById('main');
    const div = document.createElement('div');
    div.innerHTML = `
      <p>名前: ${this.name}</p>
      <p>体力: ${this.hp}</p>
      <p>魔法力: ${this.mp}</p>
    `
    mainEl.appendChild(div);
  }

  attack(defender) {
    /*
      キャラクターが死んでいる場合は攻撃出来ないので、それを表示する。 ①
      死んでいない場合は相手に与えたダメージを表示。　②
      相手が死んだ場合は相手に与えたダメージと死んだことを表示する。 ③
    */
    const mainEl = document.getElementById('main');
    const div = document.createElement('div');
    if (this.hp <= 0) {  //①
      div.innerHTML = `<p>${this.name}は死んでいる為、攻撃できません。`
      mainEl.appendChild(div);
      return;
    }
    
    if (defender.hp <= 0) {  //①
      div.innerHTML = `<p>${defender.name}は死んでいる為、攻撃できません。`
      mainEl.appendChild(div);
      return;
    } 
    
    if (defender.hp >= 0) { //②
      div.innerHTML = `${this.calcAttackDamage}を与えました。`
      mainEl.appendChild(div);
      return;
    }

    if (defender.hp <= 0) { //③
      div.innerHTML = `${this.calcAttackDamage}を与え、${defender.name}を倒しました。`
      mainEl.appendChild(div);
      return;
    }
  }

  calcAttackDamage(defender) {
    /*
      ダメージは単純に攻撃力から防御力を引いて計算する。
      ダメージが0未満の場合は、最低のダメージ1を与える。
    */
  }
}

class Sorcerer extends Character {
  constructor() {
    
  }

  healSpell(target) {
    /* 
      回復魔法は3のMPを消費する。
      相手のHPを15回復する。
      魔法使いが死んでいる場合はその旨を表示する。
      相手が死んでいる場合は回復が出来ないためその旨を表示する。
      MPが足りない場合はその旨を表示する。
    */
  }

  fireSpell(target) {
    /* 
      攻撃魔法は2のMPを消費する。
      相手に10のダメージを与える。
      魔法使いが死んでいる場合はその旨を表示する。
      相手が死んでいる場合は攻撃が出来ないためその旨を表示する。
      MPが足りない場合はその旨を表示する。
    */
  }
}

{
  const fighter = new Character({
    name: '武道家',
    hp: 40,
    mp: 0,
    offensePower: 15,
    defencePower: 10
  })
  const sorcerer = new Sorcerer({
    name: '魔法使い',
    hp: 25,
    mp: 10,
    offensePower: 8,
    defencePower: 10
  })
  const monster = new Character({
    name: 'モンスター',
    hp: 60,
    mp: 0,
    offensePower: 30,
    defencePower: 10
  })

  fighter.attack(monster);
  sorcerer.attack(monster);
  monster.attack(sorcerer);
  fighter.attack(monster);
  sorcerer.healSpell(sorcerer);
  monster.attack(fighter);
  fighter.attack(monster);
  sorcerer.fireSpell(monster);
  monster.attack(fighter);
  fighter.showStatus();
  sorcerer.showStatus();
  monster.showStatus();
}
