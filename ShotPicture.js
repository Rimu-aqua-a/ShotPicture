//=============================================================================
// RPG Maker MZ - ShotPicture
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Fires a picture as a bullet.
 * @author Rimu
 *
 * @help 
 *
 * ■How to use
 * You can fire a bullet from an event by 
 * using the plugin command "Fire bullet".
 * Please set each parameter before use.
 * 
 * ■Update history
 * 9/25 ver1.41・Fixed bug.
 * 9/09 ver1.40・Implemented a function to fix the angle of your own bullet.
 * 　　　　　　 ・Implemented bullet addition function for own aircraft
 * 　　　　　　 ・Fixed bug.
 * 8/09 ver1.30・Implemented a function that allows to restrict 
 * 　　　　　　 　own aircraft's bullet firing with a switch.
 * 　　　　　　 ・Implemented a function that allows to restrict
 * 　　　　　　 　the bullet firing of own aircraft while displaying text.
 * 7/17 ver1.20・Modified to correspond to image index.
 * 　　　　　　 ・Corrected so that the collision detection of 
 * 　　　　　　 　transparency can be judged correctly.
 * 7/16 ver1.10・Implemented a function that can store the 
 * 　　　　　　 　ID of the hit target in a variable.
 * 　　　　　　 ・Implemented a function that allows bullets 
 * 　　　　　　 　to disappear by setting region/terrain tags.
 * 　　　　　　 ・Corrected so that even if multiple bullets hit, 
 * 　　　　　　 　the hit processing will be done once.
 * 　　　　　　 ・Fixed bug.
 * 7/15 ver1.00 public
 * 
 * ※I'm using Google Translate.
 * 
 * @param PlayerBullet
 * @text Whether the player fires bullets
 * @desc Allows players to fire bullets.
 * @type boolean
 * @default false
 * 
 * @param PlayerBulletKey
 * @text key to fire
 * @desc Set any key. (default is S)
 * @default S
 * 
 * @param PBulletSwitch
 * @text fire limit switch
 * @desc Turn on the specified switch
 * Limit the firing of bullets (unlimited without)
 * @type switch
 * @default 0
 * 
 * @param Messagelimit
 * @text Restrictions while displaying messages
 * @desc Limits the firing of bullets while a message is displayed.
 * @type boolean
 * @default true
 * 
 * @param AnglefixedP
 * @text fixed direction
 * @desc Set whether to fix the bullet in the specified direction.
 * @type boolean
 * @default false
 * 
 * @param AngleP
 * @text Specified direction
 * @desc Set the direction when fixing the direction.
 * @type select
 * @option under
 * @value 2
 * @option top
 * @value 8
 * @option right
 * @value 4
 * @option left
 * @value 6
 * @option lower right
 * @value 3
 * @option lower left
 * @value 1
 * @option upper right
 * @value 9
 * @option upper left
 * @value 7
 * @default linear
 * 
 * 
 * @param ImageP
 * @text image
 * @type file
 * @require 1
 * @dir img
 * @desc This is an image file to be displayed as a bullet.
 * 
 * @param SoundP
 * @text Sound effect
 * @type file
 * @dir audio/se
 * @desc This is the sound effect when fired.
 * 
 * @param BulletNumberP
 * @text number of bullets
 * @desc This is the number of bullets fired at once.
 * @default 1
 * 
 * @param BulletSpaceP
 * @text bullet spacing
 * @default 1
 * @desc This is the interval when multiple bullets are fired.
 * 
 * @param BulletSpeedP
 * @text bullet speed
 * @default 5
 * @desc This is the speed of the bullet being fired.
 * 
 * @param BulletSizeYP
 * @text bullet size
 * @default 10
 * @desc This is the size of the bullet fired.
 * 
 * @param BulletSizeXP
 * @text width of bullet
 * @desc This is the width of the bullet being fired. 1 makes it a square.
 * @default 1
 * 
 * @param EasingP
 * @text Speed easing
 * @desc Adjust the speed.
 * @type select
 * @option no change
 * @value linear
 * @option It's getting faster
 * @value easeIn
 * @option It's getting late
 * @value easeOut
 * @default linear
 * 
 * 
 * @param blendModeP
 * @text How to blendMode bullets
 * @type select
 * @option usually
 * @value 0
 * @option addition
 * @value 1
 * @option multiplication
 * @value 2
 * @option screen
 * @value 3
 * @default 0
 * 
 * @param TargetP
 * @text Target of bullet
 * @desc It is the target to be hit. Enter -1 for player and ID for event. (Multiple possible "1,2,3", "1~3" etc.)
 * @default -1
 *
 * @param TransparencyCheckP
 * @text Whether to determine where there is no opacity
 * @type boolean
 * @desc Select whether to use areas without opacity in the picture as hit detection.
 * @default false
 * 
 * @param DeleteWallP
 * @text Walls that disappear when hit
 * @desc Please enter the terrain tag and region ID. If it hits there, the bullet will disappear.
 * @default 1
 * 
 * @param HitBulletP
 * @text Processing when hit
 * @type struct<HitEventP>
 * @desc What to do when hit by a bullet
 *
 * 
 * 
 * @command AddBullet
 * @text fire a bullet
 * @desc The picture will be fired as a bullet from the event that called this.
 *
 * @arg Image
 * @text image
 * @type file
 * @require 1
 * @dir img
 * @desc This is an image file to be displayed as a bullet.
 * 
 * @arg Sound
 * @text Sound effect
 * @type file
 * @dir audio/se
 * @desc This is the sound effect when fired.
 * 
 * @arg BulletNumber
 * @text number of bullets
 * @desc This is the number of bullets fired at once.
 * @default 1
 * 
 * @arg BulletSpace
 * @text bullet spacing
 * @default 1
 * @desc This is the interval when multiple bullets are fired.
 * 
 * @arg BulletSpeed
 * @text bullet speed
 * @default 5
 * @desc This is the speed of the bullet being fired.
 * 
 * @arg BulletSizeY
 * @text bullet size
 * @default 10
 * @desc This is the size of the bullet fired.
 * 
 * @arg BulletSizeX
 * @text width of bullet
 * @desc This is the width of the bullet being fired. 1 makes it a square.
 * @default 1
 * 
 * @arg Easing
 * @text Speed easing
 * @desc Adjust the speed.
 * @type select
 * @option no change
 * @value linear
 * @option It's getting faster
 * @value easeIn
 * @option It's getting late
 * @value easeOut
 * @default linear
 * 
 * 
 * @arg blendMode
 * @text How to blendMode bullets
 * @type select
 * @option usually
 * @value 0
 * @option addition
 * @value 1
 * @option multiplication
 * @value 2
 * @option screen
 * @value 3
 * @default 0
 * 
 * @arg Target
 * @text Target of bullet
 * @desc It is the target to be hit. Enter -1 for player and ID for event. (Multiple possible "1,2,3", "1~3" etc.)
 * @default -1
 *
 * @arg TransparencyCheck
 * @text Whether to determine where there is no opacity
 * @type boolean
 * @desc Select whether to use areas without opacity in the picture as hit detection.
 * @default false
 * 
 * @arg DeleteWall
 * @text Walls that disappear when hit
 * @desc Please enter the terrain tag and region ID. If it hits there, the bullet will disappear.
 * @default 1
 * 
 * @arg HitBullet
 * @text Processing when hit
 * @type struct<HitEventP>
 * @desc What to do when hit by a bullet
 * 
 * 
 * 
 * @command NotBulletHit
 * @text bullet passing through
 * @desc Bullets will now pass through you.
 * 
 * @command NotnotBulletHit
 * @text Cancel slipping through
 * @desc Eliminates bullet slippage.
 *
 * 
 */

/*~struct~HitEventP:
* @param DeleteBulletP
* @text Delete bullets
* @type boolean
* @desc Delete the bullet when it hits.
* @default true
* 
* @param HitTargetP
* @text Target storage variable
* @type variable
* @desc This is a variable that stores the opponent hit by the bullet.
* @default 0
* 
* @param HitCommonP
* @text common event
* @type common_event
* @desc This is a common event that is triggered when a bullet hits.
* @default 0
*
* @param HitSwitchP
* @text Switch
* @type switch
* @desc This is a switch that turns on when a bullet hits.
* @default 0
*/

/*~struct~HitEvent:
* @param DeleteBullet
* @text Delete bullets
* @type boolean
* @desc Delete the bullet when it hits.
* @default true
* 
* @param HitTarget
* @text Target storage variable
* @type variable
* @desc This is a variable that stores the opponent hit by the bullet.
* @default 0
* 
* @param HitCommon
* @text common event
* @type common_event
* @desc This is a common event that is triggered when a bullet hits.
* @default 0
*
* @param HitSwitch
* @text Switch
* @type switch
* @desc This is a switch that turns on when a bullet hits.
* @default 0
* 
* 
*/

/*:ja
 * @target MZ
 * @plugindesc ピクチャを弾として発射します。
 * @author Rimu
 *
 * @help 
 *
 * ■使用方法
 * プラグインコマンド「弾の発射」を使うことでイベントから弾を発射できます。
 * 各パラメーターを設定の上ご使用ください。
 * 
 * ■更新履歴
 * 9/25 ver1.41・バグを修正
 * 9/09 ver1.40・自機の弾の角度固定機能を実装
 * 　　　　　　 ・自機の弾増減機能を実装
 * 　　　　　　 ・バグを修正
 * 8/09 ver1.30・スイッチで自機の弾発射を制限できる機能を実装
 * 　　　　　　 ・文章表示中の自機の弾発射を制限できる機能を実装
 * 7/17 ver1.20・画像のインデックスに対応するように修正
 * 　　　　　　 ・透明度の当たり判定を正常に判定できるように修正
 * 7/16 ver1.10・被弾した対象のIDを変数に格納できる機能を実装
 * 　　　　　　 ・リージョン・地形タグ設定で弾が消える機能を実装
 * 　　　　　　 ・複数の弾が当たっても被弾処理を一回になるよう修正
 * 　　　　　　 ・バグを修正
 * 7/15 ver1.00公開
 * 
 * 
 * @param PlayerBullet
 * @text 自機が弾を発射するか
 * @desc 自機が弾を発射できるようになります。
 * @type boolean
 * @default false
 * 
 * @param PlayerBulletKey
 * @text 発射するキー
 * @desc 任意のキーを設定できます。(デフォルトはS)
 * @default S
 * 
 * @param PBulletSwitch
 * @text 発射制限スイッチ
 * @desc 指定したスイッチをオンにすると
 * 弾の発射を制限します(なしで無制限)
 * @type switch
 * @default 0
 * 
 * @param Messagelimit
 * @text メッセージ表示中制限
 * @desc メッセージ表示中の間弾の発射を制限します。
 * @type boolean
 * @default true
 * 
 * @param AnglefixedP
 * @text 方向固定
 * @desc 指定した方向に弾を固定するかどうかを設定します。
 * @type boolean
 * @default false
 * 
 * @param AngleP
 * @text 指定方向
 * @desc 方向を固定する場合の方向を設定します。
 * @type select
 * @option 下
 * @value 2
 * @option 上
 * @value 8
 * @option 右
 * @value 4
 * @option 左
 * @value 6
 * @option 右下
 * @value 3
 * @option 左下
 * @value 1
 * @option 右上
 * @value 9
 * @option 左上
 * @value 7
 * @default 8
 * 
 * @param ImageP
 * @text 画像
 * @type file
 * @require 1
 * @dir img
 * @desc 弾として表示する画像ファイルです。
 * 
 * @param SoundP
 * @text 効果音
 * @type file
 * @dir audio/se
 * @desc 発射した時の効果音です。
 * 
 * @param BulletNumberP
 * @text 弾の数
 * @desc 一度に撃ち出す弾の数です。
 * @default 1
 * 
 * @param BulletSpaceP
 * @text 弾の間隔
 * @default 1
 * @desc 撃ち出す弾が複数の場合の間隔です。
 * 
 * @param BulletSpeedP
 * @text 弾の速度
 * @default 5
 * @desc 撃ち出す弾の速度です。
 * 
 * @param BulletSizeYP
 * @text 弾の大きさ
 * @default 10
 * @desc 撃ち出す弾の大きさです。
 * 
 * @param BulletSizeXP
 * @text 弾の横幅
 * @desc 撃ち出す弾の横幅です。1で正方形になります。
 * @default 1
 * 
 * @param EasingP
 * @text 速度のイージング
 * @desc 速度に緩急を付けられます。
 * @type select
 * @option 変化なし
 * @value linear
 * @option だんだん早くなる
 * @value easeIn
 * @option だんだん遅くなる
 * @value easeOut
 * @default linear
 * 
 * 
 * @param blendModeP
 * @text 弾の合成方法
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @option スクリーン
 * @value 3
 * @default 0
 * 
 * @param TargetP
 * @text 被弾対象
 * @desc 被弾する対象です。プレイヤーの場合は-1、イベントの場合はIDを入力してください。(複数可「1,2,3」、「1~3」など)
 * @default -1
 *
 * @param TransparencyCheckP
 * @text 不透明度が無い所を判定するか
 * @type boolean
 * @desc ピクチャの不透明度が無い場所も当たり判定として使用するかを選択します。
 * @default false
 * 
 * @param DeleteWallP
 * @text 当たると消える壁等
 * @desc 地形タグやリージョンIDを入れてください。そこに当たると弾が消滅します。
 * @default 1
 * 
 * @param HitBulletP
 * @text 当たった時の処理
 * @type struct<HitEventP>
 * @desc 弾が当たった際の処理
 *
 * 
 * @command BulletNumberPlus
 * @text 自機の弾数変更
 * @desc 自機の撃つ弾の数を変更します
 * 
 * @arg BulletNumberP2
 * @text 追加数
 * @desc 追加(-で減少)する弾の数です。
 * @Min -999
 * @default 1
 * 
 * 
 * @command AddBullet
 * @text 弾を発射
 * @desc これを呼び出したイベントからピクチャを弾として発射します。
 *
 * @arg Image
 * @text 画像
 * @type file
 * @require 1
 * @dir img
 * @desc 弾として表示する画像ファイルです。
 * 
 * @arg Sound
 * @text 効果音
 * @type file
 * @dir audio/se
 * @desc 発射した時の効果音です。
 * 
 * @arg BulletNumber
 * @text 弾の数
 * @desc 一度に撃ち出す弾の数です。
 * @default 1
 * 
 * @arg BulletSpace
 * @text 弾の間隔
 * @default 1
 * @desc 撃ち出す弾が複数の場合の間隔です。
 * 
 * @arg BulletSpeed
 * @text 弾の速度
 * @default 5
 * @desc 撃ち出す弾の速度です。
 * 
 * @arg BulletSizeY
 * @text 弾の大きさ
 * @default 10
 * @desc 撃ち出す弾の大きさです。
 * 
 * @arg BulletSizeX
 * @text 弾の横幅
 * @desc 撃ち出す弾の横幅です。1で正方形になります。
 * @default 1
 * 
 * @arg PlayerTarget
 * @text 自機狙い
 * @desc 角度の基準を自機(またはターゲット)狙いにするかどうかです。
 * @type boolean
 * @default true
 * 
 * @arg Angle
 * @text 角度
 * @desc 基準からの角度です。
 * @default 0
 * 
 * @arg Easing
 * @text 速度のイージング
 * @desc 速度に緩急を付けられます。
 * @type select
 * @option 変化なし
 * @value linear
 * @option だんだん早くなる
 * @value easeIn
 * @option だんだん遅くなる
 * @value easeOut
 * @default linear
 * 
 * @arg blendMode
 * @text 弾の合成方法
 * @desc 弾の合成方法です。
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @option スクリーン
 * @value 3
 * @default 0
 * 
 * @arg Target
 * @text 被弾対象
 * @desc 被弾する対象です。プレイヤーの場合は-1、イベントの場合はIDを入力してください。(複数可「1,2,3」、「1~3」など)
 * @default -1
 *
 * @arg TransparencyCheck
 * @text 不透明度が無い所を判定するか
 * @type boolean
 * @desc ピクチャの不透明度が無い場所も当たり判定として使用するかを選択します。
 * @default false
 * 
 * @arg DeleteWall
 * @text 当たると消える壁等
 * @desc 地形タグやリージョンIDを入れてください。そこに当たると弾が消滅します。
 * @default 1
 * 
 * @arg HitBullet
 * @text 当たった時の処理
 * @type struct<HitEvent>
 * @desc 弾が当たった際の処理
 * 
 * 
 * 
 * @command NotBulletHit
 * @text 弾のすり抜け
 * @desc 弾がすり抜けるようになります。
 * 
 * @command NotnotBulletHit
 * @text すり抜け解除
 * @desc 弾のすり抜けを解除します。
 *
 * 
 */

/*~struct~HitEventP:
* @param DeleteBulletP
* @text 弾の削除
* @type boolean
* @desc 弾が当たった時に弾を削除します。
* @default true
* 
* @param HitTargetP
* @text 対象格納変数
* @type variable
* @desc 弾が当たった相手を格納する変数です。
* @default 0
* 
* @param HitCommonP
* @text コモンイベント
* @type common_event
* @desc 弾が当たった際に起動するコモンイベントです。
* @default 0
*
* @param HitSwitchP
* @text スイッチ
* @type switch
* @desc 弾が当たった際にonになるスイッチです。
* @default 0
*/

/*~struct~HitEvent:
* @param DeleteBullet
* @text 弾の削除
* @type boolean
* @desc 弾が当たった時に弾を削除します。
* @default true
* 
* @param HitTarget
* @text 対象格納変数
* @type variable
* @desc 弾が当たった相手を格納する変数です。
* @default 0
* 
* @param HitCommon
* @text コモンイベント
* @type common_event
* @desc 弾が当たった際に起動するコモンイベントです。
* @default 0
*
* @param HitSwitch
* @text スイッチ
* @type switch
* @desc 弾が当たった際にonになるスイッチです。
* @default 0
* 
* 
*/


(() => {
  'use strict';
  const pluginName = "ShotPicture";

  function setDefault(str, def) {
    return str == undefined || str == "" ? def : str;
  }


  function getPolygonVertices(centerX, centerY, width, height, rotation) {
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);

    return [
      { x: centerX + halfWidth * cos - halfHeight * sin, y: centerY + halfWidth * sin + halfHeight * cos },
      { x: centerX - halfWidth * cos - halfHeight * sin, y: centerY - halfWidth * sin + halfHeight * cos },
      { x: centerX - halfWidth * cos + halfHeight * sin, y: centerY - halfWidth * sin - halfHeight * cos },
      { x: centerX + halfWidth * cos + halfHeight * sin, y: centerY + halfWidth * sin - halfHeight * cos }
    ];
  }

  function polygonsIntersect(poly1, poly2) {
    const polygons = [poly1, poly2];
    let minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {
      const polygon = polygons[i];
      for (i1 = 0; i1 < polygon.length; i1++) {
        const i2 = (i1 + 1) % polygon.length;
        const p1 = polygon[i1];
        const p2 = polygon[i2];
        const normal = { x: p2.y - p1.y, y: p1.x - p2.x };

        minA = maxA = undefined;
        for (j = 0; j < poly1.length; j++) {
          projected = normal.x * poly1[j].x + normal.y * poly1[j].y;
          if (minA === undefined || projected < minA) {
            minA = projected;
          }
          if (maxA === undefined || projected > maxA) {
            maxA = projected;
          }
        }

        minB = maxB = undefined;
        for (j = 0; j < poly2.length; j++) {
          projected = normal.x * poly2[j].x + normal.y * poly2[j].y;
          if (minB === undefined || projected < minB) {
            minB = projected;
          }
          if (maxB === undefined || projected > maxB) {
            maxB = projected;
          }
        }

        if (maxA < minB || maxB < minA) {
          return false;
        }
      }
    }

    return true;
  }

  function getBulletAlphaPixel(sprite, localX, localY) {
    const pic = sprite;
    if (!pic.bitmap.isReady() || pic.scale.x === 0 || pic.scale.y === 0) {
      return false;
    }
    if (pic.scale.x < 0.01 || pic.scale.y < 0.01) {
      return false;
    }

    // 座標の計算
    const dx = localX;
    const dy = localY;

    // スプライトの回転角度と中心点の補正
    const sin = Math.sin(-pic.rotation);
    const cos = Math.cos(-pic.rotation);
    const bx = Math.floor(dx * cos + dy * -sin) / pic.scale.x + (pic.anchor.x * pic.width);
    const by = Math.floor(dx * sin + dy * cos) / pic.scale.y + (pic.anchor.y * pic.height);
    // 透明度の取得
    const alpha = pic.bitmap.getAlphaPixel(bx, by);
    return alpha !== 0;
  }


  function getSpriteFileName(sprite) {
    if (sprite && sprite.bitmap && sprite.bitmap._url) {
      const url = sprite.bitmap._url;
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      return fileName;
    }
    return null;
  }
  

  function FlameGet(fileName){
    const pluginFilePath = "GALV_CharacterFramesMZ";
    if (pluginFilePath) {
  const parameters = PluginManager.parameters(pluginFilePath);
  const fileSymbol = parameters["fileSymbol"];

  let frame = 3; // デフォルトのフレーム数
  let pattern = fileSymbol+"\\d+";
  if (fileName.indexOf(fileSymbol) !== -1) {
  const fileName2 = fileName.replace(new RegExp(pattern), fileSymbol);
  let pattern2 = /%\((\d+)\)/;
  let match2 = fileName2.match(pattern2);
  if (match2) {
    frame = match2[1];
    return frame;
} else {
  return frame;
}
}else{
  return frame;
}
}else{
  let frame = 3
  return frame;
}

}



  function getTargetAlphaPixel(sprite, localX, localY) {
    if (!sprite || !sprite.bitmap || !sprite.bitmap.isReady() || sprite.scale.x === 0 || sprite.scale.y === 0) {
      return false;
    }
  
    if (sprite.scale.x < 0.01 || sprite.scale.y < 0.01) {
      return false;
    }
  
    // 座標の計算
    const dx = localX;
    const dy = localY;
  
    // スプライトの回転角度と中心点の補正
    const sin = Math.sin(-sprite.rotation);
    const cos = Math.cos(-sprite.rotation);
    const bx = Math.floor(dx * cos + dy * -sin) / sprite.scale.x + (sprite.anchor.x * sprite.width);
    const by = Math.floor(dx * sin + dy * cos) / sprite.scale.y + (sprite.anchor.y * sprite.height);
    
    // 画像の使用インデックスに基づくビットマップの選択
    const character = sprite._character;
    if (!character) {
      return false;
    }
  
    const index = character.characterIndex();
    const sheetWidth = sprite.bitmap.width;
    const sheetHeight = sprite.bitmap.height;
    const fileName = decodeURIComponent(getSpriteFileName(sprite));
    if (!fileName) {
      return false;
    }
    const frame = FlameGet(fileName);
    let frameWidth = sheetWidth / (frame * 4);
    let frameHeight = sheetHeight / 8;
    if (fileName.includes('$')) {
    frameWidth = sheetWidth / frame;
    frameHeight = sheetHeight / 4;
    }
  
    const characterDirection = character.direction();
    const characterPattern = character.pattern();
    const offsetX = (index % 4) * frame * frameWidth + characterPattern * frameWidth;
    const offsetY = (Math.floor(index / 2) * 2 + (characterDirection / 2 - 1)) * frameHeight;
    const targetX = bx + offsetX;
    const targetY = by + offsetY;
    // 透明度の取得
    if (targetX < 0 || targetX >= sheetWidth || targetY < 0 || targetY >= sheetHeight) {
      return false;
    }
    const alpha = sprite.bitmap.getAlphaPixel(targetX, targetY);
    return alpha !== 0;
  }
  
  

  function checkCollision(TargetSprite, bulletSprite) {
    // プレイヤーと弾のポリゴン頂点を取得
    const TargetVertices = getPolygonVertices(
      TargetSprite.x, TargetSprite.y - TargetSprite.height / 2,
      TargetSprite.width * TargetSprite.scale.x,
      TargetSprite.height * TargetSprite.scale.y,
      TargetSprite.rotation
    );
    const bulletVertices = getPolygonVertices(
      bulletSprite.x, bulletSprite.y,
      bulletSprite.width * bulletSprite.scale.x,
      bulletSprite.height * bulletSprite.scale.y,
      bulletSprite.rotation
    );

    // ポリゴンの重なりチェック
    if (!polygonsIntersect(TargetVertices, bulletVertices)) {
      return false;
    }

    // 重なり領域内の透明度チェック
    const overlappingPixels = [];
    const TargetMinX = Math.floor(Math.min(...TargetVertices.map(v => v.x)));
    const TargetMaxX = Math.floor(Math.max(...TargetVertices.map(v => v.x)));
    const TargetMinY = Math.floor(Math.min(...TargetVertices.map(v => v.y)));
    const TargetMaxY = Math.floor(Math.max(...TargetVertices.map(v => v.y)));

    const bulletMinX = Math.floor(Math.min(...bulletVertices.map(v => v.x)));
    const bulletMaxX = Math.floor(Math.max(...bulletVertices.map(v => v.x)));
    const bulletMinY = Math.floor(Math.min(...bulletVertices.map(v => v.y)));
    const bulletMaxY = Math.floor(Math.max(...bulletVertices.map(v => v.y)));
    const startX = Math.max(TargetMinX, bulletMinX);
    const endX = Math.min(TargetMaxX, bulletMaxX);
    const startY = Math.max(TargetMinY, bulletMinY);
    const endY = Math.min(TargetMaxY, bulletMaxY);
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if (getBulletAlphaPixel(bulletSprite, x - bulletSprite.x, y - bulletSprite.y) &&
          getTargetAlphaPixel(TargetSprite, x - TargetSprite.x, y - TargetSprite.y)) {
          overlappingPixels.push({ x, y });
        }
      }
    }

    return overlappingPixels;
  }


  // 元のterminate関数を保存
  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  let spritesP = [];
  let sprites = [];

  function toBoolean(str, def) {
    if (str === true || str === "true") {
      return true;
    } else if (str === false || str === "false") {
      return false;
    }
    return def;
  }
  function toNumber(str, def) {
    if (str == undefined || str == "") {
      return def;
    }
    return isNaN(str) ? def : +(str || def);
  }

  const param = PluginManager.parameters(pluginName);
  const params = {};


  let nothit = false;
  PluginManager.registerCommand(pluginName, "NotnotBulletHit", function (args) {
    nothit = false;
  });

  PluginManager.registerCommand(pluginName, "NotBulletHit", function (args) {
    nothit = true;
  });

  params.PlayerBulletKey = setDefault(param.PlayerBulletKey, "S");
  const PlayerBulletKey = params.PlayerBulletKey;
  const shot = PlayerBulletKey.toUpperCase();

  function setKey(shot) {
    const KeyCodes = {
      48: '0', 49: '1', 50: '2', 51: '3', 52: '4',
      53: '5', 54: '6', 55: '7', 56: '8', 57: '9',
      65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E',
      70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J',
      75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O',
      80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T',
      85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y',
      90: 'Z',
      112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4',
      116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8',
      120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12'
    };
    const keys = Object.keys(KeyCodes);
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (shot == KeyCodes[key]) {
        const name = 'Shot';
        Input.keyMapper[key] = name;
      }
    }
  }

  params.PlayerBullet = setDefault(param.PlayerBullet, false);
  const PlayerBullet = params.PlayerBullet;

  if (PlayerBullet == "true") {
    const params = {
      nameP: setDefault(param.ImageP, ""),
      numberP: Number(setDefault(param.BulletNumberP, 1)),
      PBulletSwitch: Number(setDefault(param.PBulletSwitch, 0)),
      Messagelimit: setDefault(param.Messagelimit,""),
      AnglefixedP: toBoolean(setDefault(param.AnglefixedP, false)),
      AngleP: Number(setDefault(param.AngleP, 8)),
      spaceP: Number(setDefault(param.BulletSpaceP, 1)),
      speedP: Number(setDefault(param.BulletSpeedP, 10)),
      scaleYP: Number(setDefault(param.BulletSizeYP, 10)),
      sizeXP: Number(setDefault(param.BulletSizeXP, 1)),
      transparencyCheckP: setDefault(param.TransparencyCheckP, false),
      blendModeP: Number(setDefault(param.blendModeP, 0)),
      DeleteWallP: Number(setDefault(param.DeleteWallP, 1)),
      DeleteBulletP: toBoolean(JSON.parse(param.HitBulletP).DeleteBulletP, true),
      HitCommonP: toNumber(JSON.parse(param.HitBulletP).HitCommonP, 0),
      HitTargetP: toNumber(JSON.parse(param.HitBulletP).HitTargetP, 0),
      HitSwitchP: toNumber(JSON.parse(param.HitBulletP).HitSwitchP, 0),
      easingTypeP: setDefault(param.EasingTypeP, "linear"),
    };

    params.targetP = param.TargetP ? param.TargetP.split(',').map(str => {
      if (str.includes('~')) {
        const range = str.split('~').map(Number);
        const [start, end] = range;
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      } else {
        return Number(str);
      }
    }).flat() : [];

    const Messagelimit = params.Messagelimit;
    const PBulletSwitch = params.PBulletSwitch;
    const AnglefixedP = params.AnglefixedP;
    const AngleP = params.AngleP;
    const speedP = params.speedP;
    const nameP = params.nameP;
    const blendModeP = params.blendModeP;
    const spaceP = params.spaceP;
    let numberP = params.numberP;
    const targetP = params.targetP;
    let transparencyCheckP = params.transparencyCheckP;
    let deletebulletP = params.DeleteBulletP;
    let hitcommonP = params.HitCommonP;
    let hitswitchP = params.HitSwitchP;

    let numberPplus = 0;
    PluginManager.registerCommand(pluginName, "BulletNumberPlus", function (args) {
      params.numberPplus =Number(setDefault(args.BulletNumberP2, 1));
      numberPplus= params.numberPplus;
      numberP += numberPplus;
      console.log(numberP)});

    if (nothit == "true") {

      transparencyCheckP = true;
      deletebulletP = false;
      hitcommonP = 0;
      hitswitchP = 0;

    } else {
      transparencyCheckP = params.transparencyCheckP;
      deletebulletP = params.DeleteBulletP;
      hitcommonP = params.HitCommonP;
      hitswitchP = params.HitSwitchP;
    };
    
    setKey(shot);

    Scene_Map.prototype.updatekey = function () {
      if (Messagelimit == true){
        if ($gameMessage && $gameMessage.isBusy()) {
        return;}}
      if (!PBulletSwitch == 0 || !PBulletSwitch == ""){
        if ($gameSwitches && $gameSwitches.value(PBulletSwitch)){
        return;}}
      
      if (Input.isTriggered("Shot")) {
        Scene_Map.prototype.playerShot()
      }
    }

      // 一度だけupdateMainをオーバーライド
  if (!Scene_Map.prototype._isUpdatedMainOverridden) {
    const _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
      _Scene_Map_updateMain.call(this);
      Scene_Map.prototype.updatekey();
      updateShotPictureP()
    }
    Scene_Map.prototype._isUpdatedMainOverridden = true;
  }

  
  let hasCollisionOccurred = false;

  function updateShotPictureP() {
    spritesP.forEach((sprite, index) => {
      if (!sprite || sprite._destroyed) return; // スプライトが存在しないか、削除されている場合は処理をスキップ
      sprite._elapsedTime += 1 / 60;
      const easedTime = sprite._easingFunction(sprite._elapsedTime);
      
      // 弾の位置をイージング関数で更新
      sprite._mapX = sprite._originX + sprite._moveX * easedTime;
      sprite._mapY = sprite._originY + sprite._moveY * easedTime;
  
      sprite.x = $gameMap.adjustX(sprite._mapX) * $gameMap.tileWidth();
      sprite.y = $gameMap.adjustY(sprite._mapY) * $gameMap.tileHeight();
  
      const mapX = Math.round(((sprite.x - $gamePlayer.screenX()) / 48) + $gamePlayer.x);
      const mapY = Math.round(((sprite.y - $gamePlayer.screenY()) / 48) + $gamePlayer.y);
      if ($gameMap.regionId(mapX, mapY) == params.DeleteWallP) {
        SceneManager._scene.removeChild(sprite);
        sprite._destroyed = true; // 削除フラグを設定
        spritesP.splice(index, 1);
        return;
      }
      
      const player = $gamePlayer;
      const playerSprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === player);
      if (!playerSprite) {
        return;
      }
  
      if (transparencyCheckP == true) {
        $gameMap.events().forEach(event => {
          const eventSprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === event);
          if (eventSprite && targetP.includes(event.eventId())) {
            const nottransparency = checkCollision(eventSprite, sprite);
            if (nottransparency) {
              if (deletebulletP == true) {
                SceneManager._scene.removeChild(sprite);
                sprite._destroyed = true;
                sprites.splice(index, 1);
              }
              if (hasCollisionOccurred) return;
              $gameVariables.setValue(params.HitTargetP,event.eventId())
              $gameTemp.reserveCommonEvent(hitcommonP);
              $gameSwitches.setValue(hitswitchP, true);
              hasCollisionOccurred = true;
              return;
            }
          }
        });
      } else {
        $gameMap.events().forEach(event => {
          const eventSprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === event);
          if (eventSprite && targetP.includes(event.eventId())) {
            const collisionPoints = checkCollision(eventSprite, sprite);
            if (collisionPoints && collisionPoints.length > 0) {
              if (deletebulletP == true) {
                SceneManager._scene.removeChild(sprite);
                sprite._destroyed = true;
                sprites.splice(index, 1);
              }
              if (hasCollisionOccurred) return;
              $gameVariables.setValue(params.HitTargetP,event.eventId())
              $gameTemp.reserveCommonEvent(hitcommonP);
              $gameSwitches.setValue(hitswitchP, true);
              hasCollisionOccurred = true;
              return;
            }
          }
        });
      }
    });
  }
    Scene_Map.prototype.updatekey();
    const directions = {
      8: -Math.PI / 2,     // 下
      9: -Math.PI / 4,     // 右下
      6: 0,                // 右
      3: Math.PI / 4,      // 右上
      2: Math.PI / 2,      // 上
      1: 3 * Math.PI / 4,   // 左上
      4: Math.PI,          // 左
      7: -3 * Math.PI / 4 // 左下
    };
    let saveAmgle1 = directions[2];
    let lastbaseAngle = directions[2];


    // プレイヤーの移動方向を追跡するため、Game_Playerクラスをオーバーライドする
    const _Game_Player_moveByInput = Game_Player.prototype.moveByInput;
    Game_Player.prototype.moveByInput = function () {
      _Game_Player_moveByInput.call(this);
      if (this.isMoving()) {
        const directions = {
          8: -Math.PI / 2,     // 上
          9: -Math.PI / 4,     // 右下
          6: 0,                // 右
          3: Math.PI / 4,      // 右上
          2: Math.PI / 2,      // 下
          1: 3 * Math.PI / 4,   // 左上
          4: Math.PI,          // 左
          7: -3 * Math.PI / 4 // 左下
        };
        const playerDirection = Input.dir8;
        let saveAmgle = saveAmgle1;
        saveAmgle1 = lastbaseAngle;
        lastbaseAngle = directions[playerDirection];  // 歩いている間は移動方向を更新
        if (lastbaseAngle == undefined) { lastbaseAngle = saveAmgle;}
      } 
    };

    Scene_Map.prototype.playerShot = function () {
      params.se = setDefault(param.SoundP, "");
      if (params.se) {
        AudioManager.playSe({ "name": params.se, "volume": 50, "pitch": 100, "pan": 0 });
      }

      hasCollisionOccurred = false;

      const player = $gamePlayer;
      const playerSprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === player);
      if (!playerSprite) {
        return;
    }

      const playermapX = player.x;
      const playermapY = player.y;

      let baseAngle = 0;
      if (player.isMoving()) {
        const directions = {
          8: -Math.PI / 2,     // 下
          9: -Math.PI / 4,     // 右下
          6: 0,                // 右
          3: Math.PI / 4,      // 右上
          2: Math.PI / 2,      // 上
          1: 3 * Math.PI / 4,   // 左上
          4: Math.PI,          // 左
          7: -3 * Math.PI / 4 // 左下
        };
        const playerDirection = Input.dir8;
        baseAngle = directions[playerDirection];
        if (baseAngle == undefined) { baseAngle = lastbaseAngle;}console.log(baseAngle)
      } else {
        baseAngle = lastbaseAngle;  // 止まっている間は直前の移動方向に基づいて角度を計算
      }
      if(AnglefixedP==true){
        baseAngle = directions[AngleP];
      };

      const easingFunctionsP = {
        "linear": t => t,
        "easeIn": t => t * t,
        "easeOut": t => t * (2 - t),
      };
    
      const easingFunctionP = easingFunctionsP[params.easingTypeP] || easingFunctionsP.linear;

      const distance = 0.5; // プレイヤーからの距離
      const offsetX = distance * Math.cos(baseAngle);
      const offsetY = distance * Math.sin(baseAngle);

      const picX = playermapX + 0.5 + offsetX; // 弾を発射するX座標
      const picY = playermapY + 0.5 + offsetY; // 弾を発射するY座標
      const scaleX = params.scaleYP * params.sizeXP;
      const scaleY = params.scaleYP;
      const newSprites = [];
      for (let i = 0; i < numberP; i++) {
        const angleOffset = (i - (numberP - 1) / 2) * (spaceP * Math.PI / 180);
        const rotation = 90 * (spaceP * Math.PI / 180);
        const angle = baseAngle + angleOffset;

        const sprite = new Sprite(ImageManager.loadBitmap('img/', nameP));
        sprite._mapX = picX;
        sprite._mapY = picY;
        sprite.x = $gameMap.adjustX(sprite._mapX) * $gameMap.tileWidth();
        sprite.y = $gameMap.adjustY(sprite._mapY) * $gameMap.tileHeight();
        sprite.scale.x = scaleX / 100;
        sprite.scale.y = scaleY / 100;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        sprite.blendMode = blendModeP;
        sprite.rotation = angle + rotation; // 弾の角度を設定

        sprite._moveX = speedP * Math.cos(angle);
        sprite._moveY = speedP * Math.sin(angle);
        sprite._originX = picX;
        sprite._originY = picY;
        sprite._speed = speedP;
        sprite._easingFunction = easingFunctionP;
        sprite._elapsedTime = 0;

        spritesP.push(sprite);
        SceneManager._scene.addChild(sprite);
      }

      spritesP = spritesP.concat(newSprites); 


      
      if (!Scene_Map.prototype._isTerminatedOverridden) {
        const _Scene_Map_terminate = Scene_Map.prototype.terminate;
        Scene_Map.prototype.terminate = function () {
          _Scene_Map_terminate.call(this);
          spritesP = [];
        };
        Scene_Map.prototype._isTerminatedOverridden = true;
      }
  
      updateShotPictureP();
    }
  }


  PluginManager.registerCommand(pluginName, "AddBullet", function (args) {
    const params = {
      se: setDefault(args.Sound, ""),
      name: setDefault(args.Image, ""),
      number: Number(setDefault(args.BulletNumber, 1)),
      space: Number(setDefault(args.BulletSpace, 1)),
      speed: Number(setDefault(args.BulletSpeed, 10)),
      scaleY: Number(setDefault(args.BulletSizeY, 10)),
      sizeX: Number(setDefault(args.BulletSizeX, 1)),
      target: setDefault(args.Target, -1),
      transparencyCheck: setDefault(args.TransparencyCheck, false),
      blendMode: Number(setDefault(args.blendMode, 0)),
      PlayerTarget: setDefault(args.PlayerTarget, true),
      Angle: setDefault(args.Angle, 0),
      easingType: setDefault(args.EasingType, "linear"),
      DeleteWall: Number(setDefault(args.DeleteWall, 1)),
      deletebullet: toBoolean(JSON.parse(args.HitBullet).DeleteBullet, true),
      HitTarget: toNumber(JSON.parse(args.HitBullet).HitTarget, 0),
      hitcommon: toNumber(JSON.parse(args.HitBullet).HitCommon, 0),
      hitswitch: toNumber(JSON.parse(args.HitBullet).HitSwitch, 0)
    };
  
    if (params.se) {
      AudioManager.playSe({ "name": params.se, "volume": 50, "pitch": 100, "pan": 0 });
    }
  
    const easingFunctions = {
      "linear": t => t,
      "easeIn": t => t * t,
      "easeOut": t => t * (2 - t),
    };
  
    const easingFunction = easingFunctions[params.easingType] || easingFunctions.linear;
  
    let target = params.target;
    if (target !== -1) {
      target = target ? target.split(',').flatMap(str => {
        if (str.includes('~')) {
          const range = str.split('~').map(Number);
          const [start, end] = range;
          return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        } else {
          return [Number(str)];
        }
      }) : [];
    }
  
    const playerSprite = getPlayerSprite();
    if (!playerSprite) { return; }
  
    const event = $gameMap.event(this._eventId);
    const picX = event.x + 0.5;
    const picY = event.y + 0.5;
  
    const scaleX = params.scaleY * params.sizeX;
    const scaleY = params.scaleY;
    const speed = params.speed / 20;
    const name = params.name;
    const blendMode = params.blendMode;
    const space = params.space;
    const number = params.number;
    const PlayerTarget = params.PlayerTarget;
    let Angle = params.Angle;
    if (typeof Angle === 'string' && Angle.match(/\\v\[\d+\]/)) {
      const variableId = Number(Angle.match(/\d+/)[0]);
      Angle = $gameVariables.value(variableId);
    } else if (isNaN(Number(Angle))) {
      Angle = $gameVariables.value(Number(Angle));
    } else {
      Angle = Number(Angle);
    }
    let deletebullet = params.deletebullet;
    let hitcommon = params.hitcommon;
    let hitswitch = params.hitswitch;
    let transparencyCheck = params.transparencyCheck;

    if (nothit == "true") {

      transparencyCheck = true;
      deletebullet = false;
      hitcommon = 0;
      hitswitch = 0;

    } else {
      transparencyCheck = params.transparencyCheck;
      deletebullet = params.deletebullet;
      hitcommon = params.hitcommon;
      hitswitch = params.hitswitch;
    };
  
    let Direction = 0;
    let TargetX = 0;
    let TargetY = 0;
    let DistanceX = 0;
    let DistanceY = 0;
    let radian1 = 0;
    let radian2 = (90 * Math.PI) / 180;
    let radian = 0;
    let baseAngle = 0;
    let TargetHeight = 0;
    Angle = (Angle * Math.PI) / 180;
    if (PlayerTarget === "true") {
      if (target == -1) {
        TargetHeight = playerSprite.height;
        TargetX = $gamePlayer.x;
        TargetY = $gamePlayer.y;
      } else {
        $gameMap.events().forEach(event => {
          const eventSprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === event);
          if (!eventSprite) return;
          TargetHeight = eventSprite.height;
          TargetX = event.x;
          TargetY = event.y;
        });
      }
  
      DistanceX = TargetX - picX;
      DistanceY = TargetY - picY;
  
      radian1 = Math.atan2(DistanceY, DistanceX);
      radian = radian1 + radian2;
      baseAngle = radian - Math.PI / 2;
    } else {
      const directions = {
        8: -Math.PI / 2,     // 下
        9: -Math.PI / 4,     // 右下
        6: 0,                // 右
        3: Math.PI / 4,      // 右上
        2: Math.PI / 2,      // 上
        1: 3 * Math.PI / 4,   // 左上
        4: Math.PI,          // 左
        7: -3 * Math.PI / 4 // 左下
      };
      Direction = directions[$gameMap.event(this._eventId).direction()];
      baseAngle = Direction + Angle;
    }
  
    let sprites = [];
    for (let i = 0; i < number; i++) {
      const angleOffset = (i - (number - 1) / 2) * (space * Math.PI / 180);
      const angle = baseAngle + angleOffset;
      const sprite = new Sprite(ImageManager.loadBitmap('img/', name));
      sprite._mapX = picX;
      sprite._mapY = picY;
      sprite.x = $gameMap.adjustX(sprite._mapX) * $gameMap.tileWidth();
      sprite.y = $gameMap.adjustY(sprite._mapY) * $gameMap.tileHeight();
      sprite.scale.x = scaleX / 100;
      sprite.scale.y = scaleY / 100;
      sprite.anchor.x = 0.5;
      sprite.anchor.y = 0.5;
      sprite.blendMode = blendMode;
      sprite.rotation = angle + radian2;
  
      sprite._moveX = speed * Math.cos(angle);
      sprite._moveY = speed * Math.sin(angle);
      sprite._originX = picX;
      sprite._originY = picY;
      sprite._speed = speed;
      sprite._easingFunction = easingFunction;
      sprite._elapsedTime = 0;
  
      sprites.push(sprite);
      SceneManager._scene.addChild(sprite);
    }
  
    let hasCollisionOccurred = false;

    function updateShotPicture() {
      sprites.forEach((sprite, index) => {
          if (!sprite || sprite._destroyed) return; // スプライトが存在しないか、削除されている場合は処理をスキップ

              // 経過時間を更新
              sprite._elapsedTime += 1 / 60;
  
              // イージング関数を適用
              const easedTime = sprite._easingFunction(sprite._elapsedTime);
  
              // マップ座標の更新
              sprite._mapX += sprite._moveX * easedTime;
              sprite._mapY += sprite._moveY * easedTime;
  
              // 画面上の座標を計算
              sprite.x = $gameMap.adjustX(sprite._mapX) * $gameMap.tileWidth();
              sprite.y = $gameMap.adjustY(sprite._mapY) * $gameMap.tileHeight();
  
              // マップの座標を取得
              const mapX = Math.round(((sprite.x - $gamePlayer.screenX()) / 48) + $gamePlayer.x);
              const mapY = Math.round(((sprite.y - $gamePlayer.screenY()) / 48) + $gamePlayer.y);
  
              // マップ領域の確認とスプライトの削除
              if ($gameMap.regionId(mapX, mapY) == params.DeleteWall) {
                  SceneManager._scene.removeChild(sprite);
                  sprite._destroyed = true; // 削除フラグを設定
                  sprites.splice(index, 1); // スプライトを配列から削除
                  return; // 処理を終了して次のスプライトへ
              }
  
              const playerSprite = getPlayerSprite();
              if (!playerSprite) return;
  
              // 透明チェック処理
              if (transparencyCheck === true) {
                  let nottransparency = checkCollision(playerSprite, sprite);
  
                  $gameMap.events().forEach(event => {
                      if (target !== -1) {
                          const eventSprite = SceneManager._scene._spriteset._characterSprites.find(eSprite => eSprite._character === event);
                          if (!eventSprite) return;
                          if (eventSprite && target.includes(event.eventId())) {
                              nottransparency = checkCollision(eventSprite, sprite);
                          }
                      }
                  });
  
                  if (nottransparency) {
                      if (deletebullet === true) {
                          SceneManager._scene.removeChild(sprite);
                          sprite._destroyed = true; // 削除フラグを設定
                          sprites.splice(index, 1); // スプライトを配列から削除
                      }
                      if (hasCollisionOccurred) return;
                      $gameVariables.setValue(params.HitTarget, event.eventId());
                      $gameTemp.reserveCommonEvent(hitcommon);
                      $gameSwitches.setValue(hitswitch, true);
                      hasCollisionOccurred = true;
                      return; // 次のスプライトへ
                  }
              } else {
                  let collisionPoints = checkCollision(playerSprite, sprite);
  
                  $gameMap.events().forEach(event => {
                      const eventSprite = SceneManager._scene._spriteset._characterSprites.find(eSprite => eSprite._character === event);
                      if (target !== -1) {
                          if (eventSprite && target.includes(event.eventId())) {
                              collisionPoints = checkCollision(eventSprite, sprite);
                          }
                      }
                  });
  
                  if (collisionPoints && collisionPoints.length > 0) {
                      if (deletebullet === true) {
                          SceneManager._scene.removeChild(sprite);
                          sprite._destroyed = true; // 削除フラグを設定
                          sprites.splice(index, 1); // スプライトを配列から削除
                      }
                      if (hasCollisionOccurred) return;
                      $gameVariables.setValue(params.HitTarget, event.eventId());
                      $gameTemp.reserveCommonEvent(hitcommon);
                      $gameSwitches.setValue(hitswitch, true);
                      hasCollisionOccurred = true;
                      return; // 次のスプライトへ
                  }
              }
      });
  
  
    }
  


    const _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
      _Scene_Map_updateMain.call(this);
      Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        sprites.forEach((sprite) => {SceneManager._scene.removeChild(sprite);
        sprites.splice(sprites.indexOf(sprite), 1);})
        spritesP = [];
        sprites = [];
      };
      updateShotPicture();
    };
  });
  
  function getPlayerSprite() {
    const player = $gamePlayer;
    return SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === player);
  }

  })();
