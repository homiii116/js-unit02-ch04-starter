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
    mainEl.innerHTML = `
      <div class="characters>
        <p>名前: ${Character.name}</p>
        <p>体力: ${Character.hp}</p>
        <p>魔法力: ${Character.mp}</p>
      </div>`
  }

  attack(defender) {
    /*
      キャラクターが死んでいる場合は攻撃出来ないので、それを表示する。③
      死んでいない場合は相手に与えたダメージを表示。①
      相手が死んだ場合は相手に与えたダメージと死んだことを表示する。 ②
    */
    const attack = this.Character.find((name) => {  //攻撃するキャラクターを定義
      return name === defender;
    })
    const text = document.getElementById('main');
    if (Character.hp !== 0) {  //もしキャラクターのhpが元々０じゃなかったら、攻撃するキャラクターの攻撃力を表示　①
      text.innerHTML = `
      <div class="attack">
        <p>${attack}は${attack.offensePower}を与えました。
      </div>`
    } else if (attack.offensePower >= Character.hp) { //もし、攻撃するキャラクターの攻撃力が、キャラクターのhpより大きかったら、攻撃力を表示し、倒したと表示。②
      text.innerHTML = `
      <div class="attack">
        <p>${attack}は${attack.offensePower}を与え、倒しました。
      </div>`
    } else { //それ以外（元々キャラクターが死んでいたら）、既に死んでいると表示。③
      text.innerHTML = `
      <div class="attack">
        <p>${Character.name}は既に死んでいます。
      </div>`
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
