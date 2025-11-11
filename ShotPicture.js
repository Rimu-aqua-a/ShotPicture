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
 * ※ Due to a fairly large update in 1.50, 
 * 　 there have been significant changes to the bullet settings.
 * 　 If you are already using an older version,
 * 　 we apologize for the inconvenience, but please reset your settings.
 * 
 * 
 * 
 * ■Update history
 * 
 * 11/11 ver1.51・Fixed bug.
 * 　　　　　　  ・Implemented a feature that allows players to 
 * 　　　　　　　  toggle whether to fire or not.
 * 　　　　　　  ・Implemented a function that allows followers to 
 * 　　　　　　　  fire bullets at the same time as the player.
 * 11/04 ver1.50・Fixed bug.
 * 　　　　　　  ・Added homing function
 * 　　　　　　  ・Supports image encryption
 * 
 * ―――――――2025―――――――――――――――――――――――
 * 
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
 * @text Player fires bullets
 * @desc Allows players to fire bullets.
 * @type boolean
 * @default false
 * 
 * @param FollowerBullet
 * @text Follower fires a bullet
 * @desc Makes the follower fire bullets at the same time as the player.
 * @type boolean
 * @default false
 * 
 * @param PlayerBulletKey
 * @text key to fire
 * @desc Set any key. (default is S)
 * @default S
 * 
 * @param LimitSetP
 * @text Fire limit setting
 * @type struct<LimitSettingP>
 * @desc Fire limit setting
 * 
 * @param BulletSetP
 * @text Bullet settings
 * @type struct<BulletSettingP>
 * @desc Bullet settings
 * 
 * @param TargetP
 * @text Target of bullet
 * @desc It is the target to be hit. Enter -1 for player and ID for event. (Multiple possible "1,2,3", "1~3" etc.)
 * @default 1
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
 * @command BulletSettingChange
 * @text Change the player bullet settings
 * @desc Change the settings of the bullets the player shoots
 * 
 * @arg PlayerBulletChange
 * @text Player can fire or toggle projectiles
 * @desc Allows the player to toggle whether or not the projectile fires.
 * @type boolean
 * @default true
 * 
 * @arg FollowerBulletChange
 * @text Follower fires a bullet
 * @desc Toggles whether followers fire bullets at the same time as the player.
 * @type boolean
 * @default false
 * 
 * @arg LimitChange
 * @text Fire limit setting
 * @type struct<LimitSettingChange>
 * @desc Fire limit setting
 * 
 * @arg BulletChange
 * @text Bullet settings
 * @type struct<BulletSetChange>
 * @desc Bullet settings
 * 
 * @arg TargetChange
 * @text Target of bullet
 * @desc It is the target to be hit. Enter -1 for player and ID for event. (Multiple possible "1,2,3", "1~3" etc.)
 * @default 1
 * 
 * @arg DeleteWallChange
 * @text Walls that disappear when hit
 * @desc Please enter the terrain tag and region ID. If it hits there, the bullet will disappear.
 * @default 1
 * 
 * @arg HitBulletChange
 * @text Processing when hit
 * @type struct<HitEventChange>
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
 * @desc This is the number of bullets fired at once.Variables can be specified.
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
 * @arg PlayerTarget
 * @text Aiming at players
 * @desc Whether the angle is based on the player (or target).
 * @type boolean
 * @default true
 * 
 * @arg Angle
 * @text Angle
 * @desc The angle from the reference (event direction). Variable can be specified.
 * @default 0
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
 * @arg blendMode
 * @text How to blendMode bullets
 * @desc How to combine bullets.
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
 * @arg EventFollow
 * @text Bullet Tracking
 * @desc Setting whether to follow the specified target.
 * @type struct<EventTarget>
 * 
 * @arg DeleteWall
 * @text Walls that disappear when hit
 * @desc Please enter the terrain tag and region ID. If it hits there, the bullet will disappear.
 * @default 1
 * 
 * @arg HitBullet
 * @text Processing when hit
 * @type struct<HitEvent>
 * @desc What to do when hit by a bullet
 *
 * 
 * 
 * @command NotBulletHit
 * @text bullet passing through
 * @desc Bullets will now pass through you.
 * 
 * 
 * 
 * @command NotnotBulletHit
 * @text Cancel slipping through
 * @desc Eliminates bullet slippage.
 *
 * 
 */

/*~struct~LimitSettingP:
 * @param PBulletSwitch
 * @text fire limit switch
 * @desc Turning on the specified switch will limit the bullet firing
 * (no switch means unlimited)
 * @type switch
 * @default 0
 * 
 * @param Messagelimit
 * @text Restrictions while displaying messages
 * @desc Limits the firing of intermittent bullets while a message is displayed.
 * @type boolean
 * @default true
*/

/*~struct~EventTargetP:
* @param FollowP
* @text Bullet Tracking
* @type boolean
* @desc Decide whether to follow.
* @default false
* 
* @param FollowMethodP
* @text Tracking target
* @value near
* @option Follow the closest opponent
* @value near
* @option Follow the farthest opponent
* @value far
* @option Follow in order from closest to closest (multiple only)
* @value closestorder
* @option Random Follow
* @value random
* @default near
* @desc Determines what to follow.
* 
* @param FollowSpeedP
* @text Following speed
* @type number
* @desc Determines how far the bullet will follow from its initial angle.
* @default 5
* @max 10
*/

/*~struct~AngleSettingP:
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
 * @default 8
*/

/*~struct~BulletSettingP:
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
 * @desc This is the number of bullets fired at once.Variables can be specified.
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
 * @param EventFollowP
 * @text Bullet Tracking
 * @desc Setting whether to follow the specified target.
 * @type struct<EventTargetP>
 * 
 * @param AngleSetP
 * @text fixed direction
 * @type struct<AngleSettingP>
 * @desc Set whether to fix the bullet in the specified direction.
 *
 * @param TransparencyCheckP
 * @text Whether to determine where there is no opacity
 * @type boolean
 * @desc Select whether to use areas without opacity in the picture as hit detection.
 * @default false
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
*/

/*~struct~EventTarget:
* @param Follow
* @text Bullet Tracking
* @type boolean
* @desc Decide whether to follow.
* @default false
* 
* @param FollowMethod
* @text Tracking target
* @value near
* @option Follow the closest opponent
* @value near
* @option Follow the farthest opponent
* @value far
* @option Follow in order from closest to closest (multiple only)
* @value closestorder
* @option Random Follow
* @value random
* @default near
* @desc Determines what to follow.
* 
* @param FollowSpeed
* @text Following speed
* @type number
* @desc Determines how far the bullet will follow from its initial angle.
* @default 5
* @max 10
*/



/*~struct~LimitSettingChange:
 * @param PBulletSwitchChange
 * @text fire limit switch
 * @desc Turning on the specified switch will limit the
 * bullet firing (no switch means unlimited)
 * @type switch
 * @default 0
 * 
 * @param MessagelimitChange
 * @text Restrictions while displaying messages
 * @desc Limits the firing of intermittent bullets while a message is displayed.
 * @type boolean
 * @default true
*/

/*~struct~BulletSetChange:
 *
 * @param ImageChange
 * @text image
 * @type file
 * @require 1
 * @dir img
 * @desc This is an image file to be displayed as a bullet.
 * 
 * @param SoundChange
 * @text Sound effect
 * @type file
 * @dir audio/se
 * @desc This is the sound effect when fired.
 * 
 * @param BulletNumberChange
 * @text number of bullets
 * @desc This is the number of bullets fired at once.
 * @default 1
 * 
 * @param BulletSpaceChange
 * @text bullet spacing
 * @default 1
 * @desc This is the interval when multiple bullets are fired.
 * 
 * @param BulletSpeedChange
 * @text bullet speed
 * @default 5
 * @desc This is the speed of the bullet being fired.
 * 
 * @param BulletSizeYChange
 * @text bullet size
 * @default 10
 * @desc This is the size of the bullet fired.
 * 
 * @param BulletSizeXChange
 * @text width of bullet
 * @desc This is the width of the bullet being fired. 1 makes it a square.
 * @default 1
 * 
 * @param EasingChange
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
 * @param blendModeChange
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
 * @param EventFollowChange
 * @text Bullet Tracking
 * @desc Setting whether to follow the specified target.
 * @type struct<EventTargetChange>
 * 
 * @param AngleSetChange
 * @text Fixed bullet angle setting
 * @type struct<AngleSettingChange>
 * @desc Fixed bullet angle setting
 *
 * @param TransparencyCheckChange
 * @text Whether to determine where there is no opacity
 * @type boolean
 * @desc Select whether to use areas without opacity in the picture as hit detection.
 * @default false
 *
*/

/*~struct~EventTargetChange:
* @param FollowChange
 * @text Bullet Tracking
* @type boolean
 * @desc Setting whether to follow the specified target.
* @default true
* 
* @param FollowMethodChange
* @text Tracking target
* @value near
* @option Follow the closest opponent
* @value near
* @option Follow the farthest opponent
* @value far
* @option Follow in order from closest to closest (multiple only)
* @value closestorder
* @option Random Follow
* @value random
* @default near
* @desc Determines what to follow.
* 
* @param FollowSpeedChange
* @text Following speed
* @type number
* @desc Determines how far the bullet will follow from its initial angle.
* @default 5
* @max 10
*/

/*~struct~AngleSettingChange:
 * @param AnglefixedChange
 * @text fixed direction
 * @desc Set whether to fix the bullet in the specified direction.
 * @type boolean
 * @default false
 * 
 * @param AngleChange
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
 * @default 8
*/

/*~struct~HitEventChange:
* @param DeleteBulletChange
* @text Delete bullets
* @type boolean
* @desc Delete the bullet when it hits.
* @default true
* 
* @param HitTargetChange
* @text Target storage variable
* @type variable
* @desc This is a variable that stores the opponent hit by the bullet.
* @default 0
* 
* @param HitCommonChange
* @text common event
* @type common_event
* @desc This is a common event that is triggered when a bullet hits.
* @default 0
*
* @param HitSwitchChange
* @text Switch
* @type switch
* @desc This is a switch that turns on when a bullet hits.
* @default 0
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
 * ※1.50にてそこそこ大きなアップデートを行った影響で、
 * 　弾の設定項目に大幅な変更があります。既に過去バージョンを使用している場合は
 * 　お手数ですが再設定をお願いいたします。
 * 
 * 
 * 
 * ■更新履歴
 * 11/11 ver1.51・バグを修正
 * 　　　　　　  ・自機の発射切り替えを可能にする機能を実装
 * 　　　　　　  ・隊列メンバーにも自機と同時に発射させる機能を実装
 * 11/04 ver1.50・バグを修正
 * 　　　　　　  ・ホーミング機能を追加
 * 　　　　　　  ・画像の暗号化に対応
 * 
 * ―――――――2025―――――――――――――――――――――――
 * 
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
 * @param FollowerBullet
 * @text 隊列メンバーが弾を発射するか
 * @desc 隊列メンバーに自機と同時に弾を発射させます。
 * @type boolean
 * @default false
 * 
 * @param PlayerBulletKey
 * @text 発射するキー
 * @desc 任意のキーを設定できます。(デフォルトはS)
 * @default S
 * 
 * @param LimitSetP
 * @text 発射制限設定
 * @type struct<LimitSettingP>
 * @desc 発射制限設定
 * 
 * @param BulletSetP
 * @text 弾の設定
 * @type struct<BulletSettingP>
 * @desc 弾の設定
 * 
 * @param TargetP
 * @text 被弾対象
 * @desc 被弾する対象です。プレイヤーの場合は-1、イベントの場合はIDを入力してください。(複数可「1,2,3」、「1~3」など)
 * @default 1
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
 * 
 * 
 * @command BulletSettingChange
 * @text 自機の弾設定変更
 * @desc 自機の撃つ弾の設定を変更します
 * 
 * @arg PlayerBulletChange
 * @text 自機が弾を発射するか
 * @desc 自機の弾の発射を切り替えられます。
 * @type boolean
 * @default true
 * 
 * @arg FollowerBulletChange
 * @text 隊列メンバーが弾を発射するか
 * @desc 隊列メンバーに自機と同時に弾を発射させるか切り替えられます。
 * @type boolean
 * @default false
 * 
 * @arg LimitChange
 * @text 発射制限設定
 * @type struct<LimitSettingChange>
 * @desc 発射制限設定
 * 
 * @arg BulletChange
 * @text 弾の設定
 * @type struct<BulletSetChange>
 * @desc 弾の設定
 * 
 * @arg TargetChange
 * @text 被弾対象
 * @desc 被弾する対象です。プレイヤーの場合は-1、イベントの場合はIDを入力してください。(複数可「1,2,3」、「1~3」など)
 * @default -1
 * 
 * @arg DeleteWallChange
 * @text 当たると消える壁等
 * @desc 地形タグやリージョンIDを入れてください。そこに当たると弾が消滅します。
 * @default 1
 * 
 * @arg HitBulletChange
 * @text 当たった時の処理
 * @type struct<HitEventChange>
 * @desc 弾が当たった際の処理
 * 
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
 * @desc 一度に撃ち出す弾の数です。変数指定可能。
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
 * @desc 基準(イベントの向き)からの角度です。変数指定可能。
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
 * @arg TargetFollowers
 * @text 隊列を対象にする
 * @type boolean
 * @desc 隊列の仲間を対象にするかどうかです。
 * @default false
 * 
 * @arg TransparencyCheck
 * @text 不透明度が無い所を判定するか
 * @type boolean
 * @desc ピクチャの不透明度が無い場所も当たり判定として使用するかを選択します。
 * @default false
 * 
 * @arg EventFollow
 * @text 弾の追従
 * @desc 指定したターゲットに追従するかの設定。
 * @type struct<EventTarget>
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
 * 
 * 
 * @command NotnotBulletHit
 * @text すり抜け解除
 * @desc 弾のすり抜けを解除します。
 *
 * 
 */

/*~struct~LimitSettingP:
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
*/

/*~struct~EventTargetP:
* @param FollowP
* @text 弾の追従
* @type boolean
* @desc 追従するかを決定します。
* @default false
* 
* @param FollowMethodP
* @text 追従対象
* @type select
* @option 一番近い相手を追従
* @value near
* @option 一番遠い相手を追従
* @value far
* @option 近い順から順番に追従(複数のみ)
* @value closestorder
* @option ランダムに追従
* @value random
* @default near
* @desc 追従する対象を決定します。
* 
* @param FollowSpeedP
* @text 追従速度
* @type number
* @desc 初期角度から弾がどの程度追従するかを決定します。
* @default 5
* @max 10
*/

/*~struct~AngleSettingP:
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
*/

/*~struct~BulletSettingP:
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
 * @desc 一度に撃ち出す弾の数です。変数指定可能。
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
 * @param EventFollowP
 * @text 弾の追従
 * @desc 指定したターゲットに追従するかの設定。
 * @type struct<EventTargetP>
 * 
 * @param AngleSetP
 * @text 弾の角度固定設定
 * @type struct<AngleSettingP>
 * @desc 弾の角度固定設定
 *
 * @param TransparencyCheckP
 * @text 不透明度が無い所を判定するか
 * @type boolean
 * @desc ピクチャの不透明度が無い場所も当たり判定として使用するかを選択します。
 * @default false
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
*/

/*~struct~EventTarget:
* @param Follow
* @text 弾の追従
* @type boolean
* @desc 追従するかを決定します。
* @default false
* 
* @param FollowMethod
* @text 追従対象
* @type select
* @option 一番近い相手を追従
* @value near
* @option 一番遠い相手を追従
* @value far
* @option 近い順から順番に追従(複数のみ)
* @value closestorder
* @option ランダムに追従
* @value random
* @default near
* @desc 追従する対象を決定します。
* 
* @param FollowSpeed
* @text 追従速度
* @type number
* @desc 初期角度から弾がどの程度追従するかを決定します。
* @default 5
* @max 10
*/



/*~struct~LimitSettingChange:
 * @param PBulletSwitchChange
 * @text 発射制限スイッチ
 * @desc 指定したスイッチをオンにすると
 * 弾の発射を制限します(なしで無制限)
 * @type switch
 * @default 0
 * 
 * @param MessagelimitChange
 * @text メッセージ表示中制限
 * @desc メッセージ表示中の間弾の発射を制限します。
 * @type boolean
 * @default true
*/

/*~struct~BulletSetChange:
 *
 * @param ImageChange
 * @text 画像
 * @type file
 * @require 1
 * @dir img
 * @desc 弾として表示する画像ファイルです。
 * 
 * @param SoundChange
 * @text 効果音
 * @type file
 * @dir audio/se
 * @desc 発射した時の効果音です。
 * 
 * @param BulletNumberChange
 * @text 弾の数
 * @desc 一度に撃ち出す弾の数です。変数指定可能。
 * @default 1
 * 
 * @param BulletSpaceChange
 * @text 弾の間隔
 * @default 1
 * @desc 撃ち出す弾が複数の場合の間隔です。
 * 
 * @param BulletSpeedChange
 * @text 弾の速度
 * @default 5
 * @desc 撃ち出す弾の速度です。
 * 
 * @param BulletSizeYChange
 * @text 弾の大きさ
 * @default 10
 * @desc 撃ち出す弾の大きさです。
 * 
 * @param BulletSizeXChange
 * @text 弾の横幅
 * @desc 撃ち出す弾の横幅です。1で正方形になります。
 * @default 1
 * 
 * @param EasingChange
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
 * @param blendModeChange
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
 * @param EventFollowChange
 * @text 弾の追従
 * @desc 指定したターゲットに追従するかの設定。
 * @type struct<EventTargetChange>
 * 
 * @param AngleSetChange
 * @text 弾の角度固定設定
 * @type struct<AngleSettingChange>
 * @desc 弾の角度固定設定
 *
 * @param TransparencyCheckChange
 * @text 不透明度が無い所を判定するか
 * @type boolean
 * @desc ピクチャの不透明度が無い場所も当たり判定として使用するかを選択します。
 * @default false
 *
*/

/*~struct~EventTargetChange:
* @param FollowChange
* @text 弾の追従
* @type boolean
* @desc 追従するかを決定します。
* @default true
* 
* @param FollowMethodChange
* @text 追従対象
* @type select
* @option 一番近い相手を追従
* @value near
* @option 一番遠い相手を追従
* @value far
* @option 近い順から順番に追従(複数のみ)
* @value closestorder
* @option ランダムに追従
* @value random
* @default near
* @desc 追従する対象を決定します。
* 
* @param FollowSpeedChange
* @text 追従速度
* @type number
* @desc 初期角度から弾がどの程度追従するかを決定します。
* @default 5
* @max 10
*/

/*~struct~AngleSettingChange:
 * @param AnglefixedChange
 * @text 方向固定
 * @desc 指定した方向に弾を固定するかどうかを設定します。
 * @type boolean
 * @default false
 * 
 * @param AngleChange
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
*/

/*~struct~HitEventChange:
* @param DeleteBulletChange
* @text 弾の削除
* @type boolean
* @desc 弾が当たった時に弾を削除します。
* @default true
* 
* @param HitTargetChange
* @text 対象格納変数
* @type variable
* @desc 弾が当たった相手を格納する変数です。
* @default 0
* 
* @param HitCommonChange
* @text コモンイベント
* @type common_event
* @desc 弾が当たった際に起動するコモンイベントです。
* @default 0
*
* @param HitSwitchChange
* @text スイッチ
* @type switch
* @desc 弾が当たった際にonになるスイッチです。
* @default 0
*/



(() => {
  'use strict';
  const pluginName = "ShotPicture";

  function setDefault(str, def) {
    return str == undefined || str == "" ? def : str;
  }

  function autoLoadImage(filePath) {
    const baseMatch = filePath.match(/^([^/\\]+)[/\\](.+?)(?:\.(\w+))?$/i);
    if (!baseMatch) {
      console.error(`Invalid path: ${filePath}`);
      return null;
    }

    const [_, folder, filename, ext] = baseMatch;
    const name = filename;

    switch (folder.toLowerCase()) {
      case "system":
        return ImageManager.loadSystem(name);
      case "pictures":
        return ImageManager.loadPicture(name);
      case "characters":
        return ImageManager.loadCharacter(name);
      case "parallaxes":
        return ImageManager.loadParallax(name);
      case "faces":
        return ImageManager.loadFace(name);
      case "sv_enemies":
        return ImageManager.loadSvEnemy(name);
      case "sv_actors":
        return ImageManager.loadSvActor(name);
      case "animations":
        return ImageManager.loadAnimation(name);
      case "tilesets":
        return ImageManager.loadTileset(name);
      case "battlebacks1":
        return ImageManager.loadBattleback1(name);
      case "battlebacks2":
        return ImageManager.loadBattleback2(name);
      case "titles1":
        return ImageManager.loadTitle1(name);
      case "titles2":
        return ImageManager.loadTitle2(name);
      case "enemies":
        return ImageManager.loadEnemy(name);
      case "icons":
        return ImageManager.loadIcon(name);
      case "backgrounds":
        return ImageManager.loadBackground(name);
      default:
        console.warn(`Unknown image folder: img/${folder}/`);
        return ImageManager.loadBitmap(`img/${folder}/`, name);
    }
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


  function FlameGet(fileName) {
    const pluginFilePath = "GALV_CharacterFramesMZ";
    if (pluginFilePath) {
      const parameters = PluginManager.parameters(pluginFilePath);
      const fileSymbol = parameters["fileSymbol"];

      let frame = 3; // デフォルトのフレーム数
      let pattern = fileSymbol + "\\d+";
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
      } else {
        return frame;
      }
    } else {
      let frame = 3
      return frame;
    }

  }



  function getTargetAlphaPixel(sprite, localX, localY) {
    if (!sprite || !sprite.bitmap || !sprite.bitmap.isReady()) return false;
    if (sprite.scale.x === 0 || sprite.scale.y === 0) return false;
    if (sprite.scale.x < 0.01 || sprite.scale.y < 0.01) return false;

    const dx = localX;
    const dy = localY;
    const sin = Math.sin(-sprite.rotation);
    const cos = Math.cos(-sprite.rotation);
    const bx = Math.floor(dx * cos + dy * -sin) / sprite.scale.x + (sprite.anchor.x * sprite.width);
    const by = Math.floor(dx * sin + dy * cos) / sprite.scale.y + (sprite.anchor.y * sprite.height);

    const character = sprite._character;
    if (!character) return false;

    const fileName = decodeURIComponent(getSpriteFileName(sprite));
    const bitmap = sprite.bitmap;
    const sheetWidth = bitmap.width;
    const sheetHeight = bitmap.height;

    if (character._tileId === 0) {
      const index = character.characterIndex ? character.characterIndex() : 0;
      const frame = FlameGet(fileName);
      let frameWidth = sheetWidth / (frame * 4);
      let frameHeight = sheetHeight / 8;
      if (fileName.includes("$")) {
        frameWidth = sheetWidth / frame;
        frameHeight = sheetHeight / 4;
      }

      const direction = character.direction ? character.direction() : 2;
      const pattern = character.pattern ? character.pattern() : 1;
      const offsetX = (index % 4) * frame * frameWidth + pattern * frameWidth;
      const offsetY = (Math.floor(index / 2) * 2 + (direction / 2 - 1)) * frameHeight;
      const targetX = bx + offsetX;
      const targetY = by + offsetY;

      if (targetX < 0 || targetX >= sheetWidth || targetY < 0 || targetY >= sheetHeight) return false;
      const alpha = bitmap.getAlphaPixel(targetX, targetY);
      return alpha !== 0;
    }

    const tileId = character._tileId;
    if (tileId > 0) {
      const tileset = $gameMap.tileset();
      if (!tileset) return false;

      const tileSize = $gameMap.tileWidth();
      const setIndex = Math.floor(tileId / 256);
      const tilesetName = tileset.tilesetNames[setIndex];
      if (!tilesetName) return false;

      const tileBitmap = ImageManager.loadTileset(tilesetName);
      if (!tileBitmap.isReady()) return false;

      const localId = tileId % 256;
      const sx = (localId % 8) * tileSize;
      const sy = Math.floor(localId / 8) * tileSize;

      const targetX = sx + bx;
      const targetY = sy + by;
      if (targetX < 0 || targetX >= tileBitmap.width || targetY < 0 || targetY >= tileBitmap.height) {
        return false;
      }

      const alpha = tileBitmap.getAlphaPixel(targetX, targetY);
      return alpha !== 0;
    }

    return false;
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

  params.PlayerBullet = toBoolean(param.PlayerBullet, false);
  let PlayerBullet = params.PlayerBullet;

  if (PlayerBullet == true) {
    const params = {
      FollowerBullet: toBoolean(param.FollowerBullet, false),
      PBulletSwitch: toNumber(JSON.parse(param.LimitSetP).PBulletSwitch, 0),
      Messagelimit: toBoolean(JSON.parse(param.LimitSetP).Messagelimit, true),
      nameP: setDefault(JSON.parse(param.BulletSetP).ImageP, ""),
      se: setDefault(JSON.parse(param.BulletSetP).SoundP, ""),
      numberP: setDefault(JSON.parse(param.BulletSetP).BulletNumberP, 1),
      spaceP: toNumber(JSON.parse(param.BulletSetP).BulletSpaceP, 1),
      speedP: toNumber(JSON.parse(param.BulletSetP).BulletSpeedP, 10),
      scaleYP: toNumber(JSON.parse(param.BulletSetP).BulletSizeYP, 10),
      sizeXP: toNumber(JSON.parse(param.BulletSetP).BulletSizeXP, 1),
      easingTypeP: setDefault(JSON.parse(param.BulletSetP).EasingP, "linear"),
      blendModeP: toNumber(JSON.parse(param.BulletSetP).blendModeP, 0),
      FollowP: toBoolean(JSON.parse(JSON.parse(param.BulletSetP).EventFollowP).FollowP, false),
      FollowTypeP: toNumber(JSON.parse(JSON.parse(param.BulletSetP).EventFollowP).FollowMethodP, 0),
      FollowSpeedP: toNumber(JSON.parse(JSON.parse(param.BulletSetP).EventFollowP).FollowSpeedP, 0),
      AnglefixedP: toBoolean(JSON.parse(JSON.parse(param.BulletSetP).AngleSetP).AnglefixedP, false),
      AngleP: toNumber(JSON.parse(JSON.parse(param.BulletSetP).AngleSetP).AngleP, 8),
      transparencyCheckP: toBoolean(JSON.parse(param.BulletSetP).TransparencyCheckP, false),
      targetP: toNumber(param.TargetP, 1),
      DeleteWallP: toNumber(param.DeleteWallP, 1),
      DeleteBulletP: toBoolean(JSON.parse(param.HitBulletP).DeleteBulletP, true),
      HitCommonP: toNumber(JSON.parse(param.HitBulletP).HitCommonP, 0),
      HitTargetP: toNumber(JSON.parse(param.HitBulletP).HitTargetP, 0),
      HitSwitchP: toNumber(JSON.parse(param.HitBulletP).HitSwitchP, 0),
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

    let FollowerBullet = params.FollowerBullet;
    let PBulletSwitch = params.PBulletSwitch;
    let Messagelimit = params.Messagelimit;
    let se = params.se;
    let nameP = params.nameP;
    let numberP = params.numberP
    let spaceP = params.spaceP;
    let speedP = params.speedP;
    let scaleYP = params.scaleYP;
    let sizeXP = params.sizeXP;
    let blendModeP = params.blendModeP;
    let AnglefixedP = params.AnglefixedP;
    let AngleP = params.AngleP;
    let easingTypeP = params.easingTypeP;
    let DeleteWallP = params.DeleteWallP;
    let HitTargetP = params.HitTargetP;
    let FollowP = params.FollowP;
    let FollowTypeP = params.FollowTypeP;
    let FollowSpeedP = params.FollowSpeedP;
    let targetP = parseTargetP(params.targetP);
    let TargetArrayP = parseTargetP(params.targetP);
    let transparencyCheckP = params.transparencyCheckP;
    let deletebulletP = params.DeleteBulletP;
    let hitcommonP = params.HitCommonP;
    let hitswitchP = params.HitSwitchP;

    function parseTargetP(t) {
      if (Array.isArray(t)) return t.map(Number).filter(n => !isNaN(n));
      if (typeof t === "number") return [t];
      if (typeof t === "string") {
        return t.split(",").flatMap(part => {
          const s = part.trim();
          if (s === "") return [];
          if (s.includes("~")) {
            const [a, b] = s.split("~").map(Number);
            if (isNaN(a) || isNaN(b)) return [];
            const min = Math.min(a, b), max = Math.max(a, b);
            return Array.from({ length: max - min + 1 }, (_, i) => min + i);
          } else {
            const n = Number(s);
            return isNaN(n) ? [] : [n];
          }
        });
      }
      return [];
    }

    PluginManager.registerCommand(pluginName, "BulletSettingChange", function (args) {

      const params = {
        PlayerBulletChange: toBoolean(JSON.parse(args.BulletChange).PlayerBulletChange, PlayerBullet),
        FollowerBulletChange: toBoolean(JSON.parse(args.BulletChange).FollowerBulletChange, FollowerBullet),
        PBulletSwitch: setDefault(JSON.parse(args.BulletChange).PBulletSwitchChange, PBulletSwitch),
        Messagelimit: setDefault(JSON.parse(args.BulletChange).MessagelimitChange, Messagelimit),
        se: setDefault(JSON.parse(args.BulletChange).SoundChange, se),
        nameP: setDefault(JSON.parse(args.BulletChange).ImageChange, nameP),
        numberP: toNumber(JSON.parse(args.BulletChange).BulletNumberChange, numberP),
        spaceP: toNumber(JSON.parse(args.BulletChange).BulletSpaceChange, spaceP),
        speedP: toNumber(JSON.parse(args.BulletChange).BulletSpeedChange, speedP),
        scaleYP: toNumber(JSON.parse(args.BulletChange).BulletSizeYChange, scaleYP),
        sizeXP: toNumber(JSON.parse(args.BulletChange).BulletSizeXChange, sizeXP),
        targetP: toNumber(JSON.parse(args.BulletChange).TargetChange, targetP),
        transparencyCheckP: toBoolean(JSON.parse(args.BulletChange).TransparencyCheckChange, transparencyCheckP),
        blendModeP: toNumber(JSON.parse(args.BulletChange).blendModeChange, blendModeP),
        AnglefixedP: setDefault(JSON.parse(args.BulletChange).AnglefixedChange, AnglefixedP),
        AngleP: setDefault(JSON.parse(args.BulletChange).AngleSetChange, AngleP),
        easingTypeP: setDefault(JSON.parse(args.BulletChange).EasingChange, easingTypeP),
        DeleteWallP: toNumber(JSON.parse(args.BulletChange).DeleteWallChange, DeleteWallP),
        deletebulletP: toBoolean(JSON.parse(args.BulletChange).DeleteBulletChange, deletebulletP),
        HitTargetP: toNumber(JSON.parse(args.HitBulletChange).HitTargetChange, HitTargetP),
        hitcommonP: toNumber(JSON.parse(args.HitBulletChange).HitCommonChange, hitcommonP),
        hitswitchP: toNumber(JSON.parse(args.HitBulletChange).HitSwitchChange, hitswitchP),
        FollowP: toBoolean(JSON.parse(JSON.parse(args.BulletChange).EventFollowChange).FollowChange, FollowP),
        FollowTypeP: toNumber(JSON.parse(JSON.parse(args.BulletChange).EventFollowChange).FollowMethodChange, FollowTypeP),
        FollowSpeedP: toNumber(JSON.parse(JSON.parse(args.BulletChange).EventFollowChange).FollowSpeedChange, FollowSpeedP)
      };

      PlayerBullet = params.PlayerBullet;
      FollowerBullet = params.FollowerBullet;
      PBulletSwitch = params.PBulletSwitch;
      Messagelimit = params.Messagelimit;
      se = params.se;
      nameP = params.nameP;
      numberP = params.numberP;
      spaceP = params.spaceP;
      speedP = params.speedP;
      scaleYP = params.scaleYP;
      sizeXP = params.sizeXP;
      blendModeP = params.blendModeP;
      AngleP = params.AngleP;
      easingTypeP = params.easingTypeP;
      DeleteWallP = params.DeleteWallP;
      HitTargetP = params.HitTargetP;
      FollowP = params.FollowP;
      FollowTypeP = params.FollowTypeP;
      FollowSpeedP = params.FollowSpeedP;
      targetP = parseTargetP(params.targetP);
      TargetArrayP = parseTargetP(params.targetP);
      transparencyCheckP = params.transparencyCheckP;
      deletebulletP = params.deletebulletP;
      hitcommonP = params.hitcommonP;
      hitswitchP = params.hitswitchP;
    });

    if (typeof numberP === 'string' && numberP.match(/\\v\[\d+\]/)) {
      const variableId = Number(numberP.match(/\d+/)[0]);
      numberP = $gameVariables.value(variableId);
    } else if (isNaN(Number(numberP))) {
      numberP = $gameVariables.value(Number(numberP));
    } else {
      numberP = Number(numberP);
    }

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

    let totalBullets = 0;
    let hitCount = 0;

    setKey(shot);

    Scene_Map.prototype.updatekey = function () {
      if (Messagelimit == true) {
        if ($gameMessage && $gameMessage.isBusy()) {
          return;
        }
      }
      if (!PBulletSwitch == 0 || !PBulletSwitch == "") {
        if ($gameSwitches && $gameSwitches.value(PBulletSwitch)) {
          return;
        }
      }

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

    function updateShotPictureP() {
      const playerSprite = getPlayerSprite();
      if (!playerSprite) return;

      if (!$gameMessage.isBusy() && !$gameMap._interpreter.isRunning()) {

        if (updateShotPictureP._pendingHitsSwitch && updateShotPictureP._pendingHitsSwitch.length > 0) {
          const switchvalue = updateShotPictureP._pendingHitsSwitch[0];
          if (switchvalue.hitSwitchId != 0 && $gameSwitches.value(switchvalue.hitSwitchId) == false) {
            const next = updateShotPictureP._pendingHitsSwitch.shift();
            $gameSwitches.setValue(next.hitSwitchId, true);
          }
        }

        if (updateShotPictureP._pendingHits && updateShotPictureP._pendingHits.length > 0) {
          const next = updateShotPictureP._pendingHits.shift();
          if (HitTargetP != 0) $gameVariables.setValue(HitTargetP, next.eventId);
          $gameTemp.reserveCommonEvent(next.commonEventId);
        }
      }

      spritesP.forEach((sprite, index) => {
        if (!sprite || sprite._destroyed) return;
        sprite._elapsedTime += 1 / 60;

        if (sprite._mapX == null || sprite._mapY == null) {
          sprite._mapX = $gamePlayer.x;
          sprite._mapY = $gamePlayer.y;
        }

        const baseSpeed = sprite._speed ?? 0.3;
        let speed;

        switch (easingTypeP) {
          case "linear":
            speed = baseSpeed;
            break;
          case "easeIn":
            speed = baseSpeed * (1 + sprite._elapsedTime * 1.5);
            break;
          case "easeOut":
            speed = Math.max(baseSpeed * (1 - sprite._elapsedTime * 0.2), 0.5);
            break;
          default:
            speed = baseSpeed;
            break;
        }

        const tw = $gameMap.tileWidth();
        const th = $gameMap.tileHeight();

        if (sprite._followTarget && sprite._followSpeed > 0) {
          const target = sprite._followTarget;
          const targetMapX = target._mapX ?? target.x ?? $gamePlayer.x;
          const targetMapY = target._mapY ?? target.y ?? $gamePlayer.y;

          const dx = targetMapX - sprite._mapX;
          const dy = targetMapY - sprite._mapY;
          const targetAngle = Math.atan2(dy, dx);

          if (sprite._angle == null) sprite._angle = targetAngle;

          let angleDiff = ((targetAngle - sprite._angle + Math.PI) % (Math.PI * 2)) - Math.PI;
          const baseTurn = 0.001;
          const turnPower = Math.pow(sprite._followSpeed || 1, 1.5);
          const turnSpeed = baseTurn * turnPower * (sprite._speed ?? 1);

          if (angleDiff > turnSpeed) sprite._angle += turnSpeed;
          else if (angleDiff < -turnSpeed) sprite._angle -= turnSpeed;
          else sprite._angle = targetAngle;

          sprite.rotation = sprite._angle;
          sprite._mapX += Math.cos(sprite._angle) * (speed / tw);
          sprite._mapY += Math.sin(sprite._angle) * (speed / th);
        }
        else {
          sprite._mapX += Math.cos(sprite._angle) * (speed / tw);
          sprite._mapY += Math.sin(sprite._angle) * (speed / th);
        }
        sprite.x = $gameMap.adjustX(sprite._mapX) * tw + tw / 2;
        sprite.y = $gameMap.adjustY(sprite._mapY) * th + th / 2;

        const mapX = Math.round(((sprite.x - $gamePlayer.screenX()) / 48) + $gamePlayer.x);
        const mapY = Math.round(((sprite.y - $gamePlayer.screenY()) / 48) + $gamePlayer.y);
        if ($gameMap.regionId(mapX, mapY) == DeleteWallP) {
          SceneManager._scene.removeChild(sprite);
          sprite._destroyed = true;
          spritesP.splice(index, 1);
          return;
        }

        let hit = false;
        let hitEvent = null;
        const targets = [];

        $gameMap.events().forEach(event => {
          if (targetP.includes(event.eventId())) {
            const eventSprite = SceneManager._scene._spriteset._characterSprites.find(eSprite => eSprite._character === event);
            if (eventSprite) targets.push({ type: "event", sprite: eventSprite, event });
          }
        });

        for (const t of targets) {
          if (transparencyCheckP) {
            if (polygonsIntersect(
              getPolygonVertices(t.sprite.x, t.sprite.y - t.sprite.height / 2,
                t.sprite.width * t.sprite.scale.x, t.sprite.height * t.sprite.scale.y, t.sprite.rotation),
              getPolygonVertices(sprite.x, sprite.y,
                sprite.width * sprite.scale.x, sprite.height * sprite.scale.y, sprite.rotation)
            )) {
              hit = true;
              hitEvent = t.event;
              break;
            }
          } else {
            const points = checkCollision(t.sprite, sprite);
            if (points && points.length > 0) {
              hit = true;
              hitEvent = t.event;
              break;
            }
          }
        }

        if (hit) {
          if (deletebulletP) {
            SceneManager._scene.removeChild(sprite);
            sprite._destroyed = true;
            spritesP.splice(index, 1);
          }

          hitCount++;
          if (hitCount <= totalBullets) {
            const eventId = hitEvent ? hitEvent.eventId() : 1;

            updateShotPictureP._pendingHitsSwitch = updateShotPictureP._pendingHitsSwitch || [];
            updateShotPictureP._pendingHitsSwitch.push({ hitSwitchId: hitswitchP });

            updateShotPictureP._pendingHits = updateShotPictureP._pendingHits || [];
            updateShotPictureP._pendingHits.push({
              eventId,
              commonEventId: hitcommonP
            });
          }
          return;
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
        lastbaseAngle = directions[playerDirection];
        if (lastbaseAngle == undefined) { lastbaseAngle = saveAmgle; }
      }
    };

    Scene_Map.prototype.playerShot = function () {

      se = setDefault(JSON.parse(param.BulletSetP).SoundP, "");
      if (se) {
        AudioManager.playSe({ "name": se, "volume": 50, "pitch": 100, "pan": 0 });
      }

      const player = $gamePlayer;
      const playerSprite = getPlayerSprite();
      if (!playerSprite) return;

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
        if (baseAngle == undefined) { baseAngle = lastbaseAngle; }
      } else {
        baseAngle = lastbaseAngle;
      }
      if (AnglefixedP == true) {
        baseAngle = directions[AngleP];
      };

      const distance = 0.5;
      const offsetX = distance * Math.cos(baseAngle);
      const offsetY = distance * Math.sin(baseAngle);

      const picX = playermapX + offsetX;
      const picY = playermapY + offsetY;
      const newSprites = [];
      for (let i = 0; i < numberP; i++) {
        const angleOffset = (i - (numberP - 1) / 2) * (spaceP * Math.PI / 180);
        const rotation = 90 * (spaceP * Math.PI / 180);
        const angle = baseAngle + angleOffset;

        const sprite = new Sprite(autoLoadImage(nameP));
        sprite._mapX = picX;
        sprite._mapY = picY;
        sprite.x = $gameMap.adjustX(sprite._mapX) * $gameMap.tileWidth();
        sprite.y = $gameMap.adjustY(sprite._mapY) * $gameMap.tileHeight();
        sprite.scale.x = (scaleYP * sizeXP) / 100;
        sprite.scale.y = scaleYP / 100;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        sprite.blendMode = blendModeP;
        sprite.rotation = angle + rotation;

        const speedPerFrame = speedP;
        sprite._moveX = speedPerFrame * Math.cos(angle);
        sprite._moveY = speedPerFrame * Math.sin(angle);
        sprite._originX = picX;
        sprite._originY = picY;
        sprite._speed = speedPerFrame / 5;
        sprite._elapsedTime = 0;

        sprite._initialAngle = angle;
        sprite._angle = angle;

        sprite._followTarget = null;
        sprite._followSpeed = 0;

        spritesP.push(sprite);
        assignFollowTargetsP();
        SceneManager._scene.addChild(sprite);
      }

      if (FollowerBullet) {
        const followers = $gamePlayer.followers()._data.filter(f => f && f.isVisible());
        const directions = {
          8: -Math.PI / 2,     // 上
          9: -Math.PI / 4,     // 右上
          6: 0,                // 右
          3: Math.PI / 4,      // 右下
          2: Math.PI / 2,      // 下
          1: 3 * Math.PI / 4,  // 左下
          4: Math.PI,          // 左
          7: -3 * Math.PI / 4  // 左上
        };

        for (const follower of followers) {
          const dir = follower.direction();
          const baseAngle = directions[dir] ?? 0;

          const tw = $gameMap.tileWidth();
          const th = $gameMap.tileHeight();

          const fx = follower.x;
          const fy = follower.y;
          const offsetX = 0.5 * Math.cos(baseAngle);
          const offsetY = 0.5 * Math.sin(baseAngle);

          const shotX = fx + offsetX;
          const shotY = fy + offsetY;

          for (let i = 0; i < numberP; i++) {
            const angleOffset = (i - (numberP - 1) / 2) * (spaceP * Math.PI / 180);
            const angle = baseAngle + angleOffset;

            const sprite = new Sprite(autoLoadImage(nameP));
            sprite._mapX = shotX;
            sprite._mapY = shotY;
            sprite.x = $gameMap.adjustX(sprite._mapX) * tw + tw / 2;
            sprite.y = $gameMap.adjustY(sprite._mapY) * th + th / 2;
            sprite.anchor.set(0.5, 0.5);
            sprite.scale.x = (scaleYP * sizeXP) / 100;
            sprite.scale.y = scaleYP / 100;
            sprite.blendMode = blendModeP;
            sprite.rotation = angle;

            sprite._speed = speedP / 5;
            sprite._elapsedTime = 0;
            sprite._angle = angle;
            sprite._initialAngle = angle;
            sprite._followTarget = null;
            sprite._followSpeed = 0;

            spritesP.push(sprite);
            assignFollowTargetsP();
            SceneManager._scene.addChild(sprite);
          }
        }
      }

      totalBullets = spritesP.length;
      hitCount = 0;

      function assignFollowTargetsP() {
        if (!FollowP) return;
        const targetIds = TargetArrayP.slice();
        const events = targetIds.map(id => $gameMap.event(id)).filter(e => e);

        const playerSprite = getPlayerSprite();

        if (targetIds.includes(-1) && playerSprite)
          events.push(playerSprite);

        if (events.length === 0) return;

        const targetData = events.map(ev => {
          const dx = ev.x - picX;
          const dy = ev.y - picY;
          return { event: ev, dist: Math.sqrt(dx * dx + dy * dy) };
        }).sort((a, b) => a.dist - b.dist);

        const followSpeedValue = FollowSpeedP;

        for (let i = 0; i < spritesP.length; i++) {
          const sp = spritesP[i];

          if (sp._followTarget && sp._followTarget._exists) continue;

          let chosen;
          switch (String(FollowTypeP)) {
            case "near":
              chosen = targetData[0].event;
              break;
            case "far":
              chosen = targetData[targetData.length - 1].event;
              break;
            case "closestorder":
              chosen = targetData[i % targetData.length].event;
              break;
            case "random":
              chosen = targetData[Math.floor(Math.random() * targetData.length)].event;
              break;
            default:
              chosen = targetData[0].event;
          }

          sp._followTarget = chosen;
          sp._followSpeed = followSpeedValue;
        }
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
    function safeParse(objOrStr, fallback = {}) {
      try {
        if (typeof objOrStr === "string") return JSON.parse(objOrStr);
        if (typeof objOrStr === "object" && objOrStr !== null) return objOrStr;
      } catch (e) { }
      return fallback;
    }

    const eventFollow = safeParse(args.EventFollow, {});
    const hitBullet = safeParse(args.HitBullet, {});

    const params = {
      se: setDefault(args.Sound, ""),
      name: setDefault(args.Image, ""),
      number: toNumber(args.BulletNumber, 1),
      space: toNumber(args.BulletSpace, 1),
      speed: toNumber(args.BulletSpeed, 10),
      scaleY: toNumber(args.BulletSizeY, 10),
      sizeX: toNumber(args.BulletSizeX, 1),
      target: setDefault(args.Target, -1),
      targetfollowers: setDefault(args.TargetFollowers, false),
      transparencyCheck: toBoolean(args.TransparencyCheck, false),
      blendMode: toNumber(args.blendMode, 0),
      PlayerTarget: toBoolean(args.PlayerTarget, true),
      Angle: setDefault(args.Angle, 0),
      easingType: setDefault(args.Easing, "linear"),
      DeleteWall: toNumber(args.DeleteWall, 1),
      deletebullet: toBoolean(hitBullet.DeleteBullet, true),
      HitTarget: toNumber(hitBullet.HitTarget, 0),
      hitcommon: toNumber(hitBullet.HitCommon, 0),
      hitswitch: toNumber(hitBullet.HitSwitch, 0),
      Follow: toBoolean(eventFollow.Follow, false),
      FollowSpeed: toNumber(eventFollow.FollowSpeed, 20),
      FollowType: setDefault(eventFollow.FollowMethod, "near"),
    };

    function parseTarget(t) {
      if (Array.isArray(t)) return t.map(Number).filter(n => !isNaN(n));
      if (typeof t === "number") return [t];
      if (typeof t === "string") {
        return t.split(",").flatMap(part => {
          const s = part.trim();
          if (s === "") return [];
          if (s.includes("~")) {
            const [a, b] = s.split("~").map(Number);
            if (isNaN(a) || isNaN(b)) return [];
            const min = Math.min(a, b), max = Math.max(a, b);
            return Array.from({ length: max - min + 1 }, (_, i) => min + i);
          } else {
            const n = Number(s);
            return isNaN(n) ? [] : [n];
          }
        });
      }
      return [];
    }

    let number = params.number
    if (typeof number === 'string' && number.match(/\\v\[\d+\]/)) {
      const variableId = Number(number.match(/\d+/)[0]);
      number = $gameVariables.value(variableId);
    } else if (isNaN(Number(number))) {
      number = $gameVariables.value(Number(number));
    } else {
      number = Number(number);
    }

    const target = parseTarget(params.target);
    const TargetArray = parseTarget(params.target);
    const speedPerFrame = params.speed;
    const name = params.name.replace(/\.\w+$/, "");
    const blendMode = params.blendMode;
    const space = params.space;
    let Angle = params.Angle;
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

    if (params.se) {
      AudioManager.playSe({ name: params.se, volume: 50, pitch: 100, pan: 0 });
    }

    const playerSprite = getPlayerSprite();
    if (!playerSprite) return;

    const event = $gameMap.event(this._eventId);
    const picX = event.x;
    const picY = event.y;

    let sprites = [];
    const targetIds = TargetArray.slice();
    const events = targetIds.map(id => $gameMap.event(id)).filter(e => e);
    const followers = [];

    if (targetIds.includes(-1) && playerSprite) {
      events.push(playerSprite);
      if (params.targetfollowers === true || params.targetfollowers === "true") {
        for (let i = 1; i < $gameParty.size(); i++) {
          const follower = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === $gamePlayer.followers().follower(i - 1));
          events.push(follower);
          followers.push(follower);
        }
      }
    }

    if (events.length === 0) return;

    for (let i = 0; i < number; i++) {

      if (typeof Angle === 'string' && Angle.match(/\\v\[\d+\]/)) {
        const variableId = Number(Angle.match(/\d+/)[0]);
        Angle = $gameVariables.value(variableId);
      } else if (isNaN(Number(Angle))) {
        Angle = $gameVariables.value(Number(Angle));
      } else {
        Angle = Number(Angle);
      }
      const AnglePI = (Angle * Math.PI) / 180

      let baseAngle = 0;
      if (params.PlayerTarget === true || params.PlayerTarget === "true") {
        const character = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === $gamePlayer);
        let dx = 0;
        let dy = 0;

        const sortedTargets = events
          .map(ev => {
            if (ev == character) {
              ev = character._character;
              dx = ev._x - picX;
              dy = ev._y - picY;
            } else if ((params.targetfollowers === true || params.targetfollowers === "true") && followers.includes(ev)) {
              ev = ev._character;
              dx = ev.x - picX;
              dy = ev.y - picY;
            } else {
              dx = ev.x - picX;
              dy = ev.y - picY;
            }
            return { event: ev, dist: Math.sqrt(dx * dx + dy * dy) };
          })
          .sort((a, b) => a.dist - b.dist);

        const nearest = sortedTargets[0];
        if (nearest && nearest.event) {
          const targetEvent = nearest.event;
          const TargetX = targetEvent.x;
          const TargetY = targetEvent.y;

          const dx = TargetX - picX;
          const dy = TargetY - picY;
          const radian1 = Math.atan2(dy, dx);
          const radian2 = (90 * Math.PI) / 180;
          baseAngle = radian1 + radian2 - Math.PI / 2;
        }

      } else {
        const directions = {
          8: -Math.PI / 2,
          9: -Math.PI / 4,
          6: 0,
          3: Math.PI / 4,
          2: Math.PI / 2,
          1: 3 * Math.PI / 4,
          4: Math.PI,
          7: -3 * Math.PI / 4
        };
        const dir = $gameMap.event(this._eventId).direction();
        baseAngle = (directions[dir] || 0) + AnglePI;
      }

      const angleOffset = (i - (number - 1) / 2) * (space * Math.PI / 180);
      const angle = baseAngle + angleOffset;
      const tw = $gameMap.tileWidth();
      const th = $gameMap.tileHeight();

      const sprite = new Sprite(autoLoadImage(name));
      sprite._mapX = picX;
      sprite._mapY = picY;
      sprite.x = $gameMap.adjustX(sprite._mapX) * tw;
      sprite.y = $gameMap.adjustY(sprite._mapY) * th;
      sprite.anchor.set(0.5, 0.5);
      sprite.scale.set((params.scaleY * params.sizeX) / 100, params.scaleY / 100);
      sprite.rotation = angle + (90 * Math.PI) / 180;
      sprite._moveX = speedPerFrame * Math.cos(angle);
      sprite._moveY = speedPerFrame * Math.sin(angle);
      sprite.blendMode = blendMode;
      sprite._originX = picX;
      sprite._originY = picY;
      sprite._speed = speedPerFrame / 5;
      sprite._elapsedTime = 0;

      sprite._initialAngle = angle;
      sprite._angle = angle;

      sprite._followTarget = null;
      sprite._followSpeed = 0;

      sprites.push(sprite);
      assignFollowTargets();
      setTimeout(() => {
        SceneManager._scene.addChild(sprite);
      }, 1);
    }

    function assignFollowTargets() {
      if (!params.Follow) return;
      const targetIds = TargetArray.slice();
      const events = targetIds.map(id => $gameMap.event(id)).filter(e => e);

      const playerSprite = getPlayerSprite();

      if (targetIds.includes(-1) && playerSprite) {
        events.push(playerSprite);
        if (params.targetfollowers === true || params.targetfollowers === "true") {
          for (let i = 1; i < $gameParty.size(); i++) {
            const follower = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === $gamePlayer.followers().follower(i - 1));
            events.push(follower);
          }
        }
      }

      if (events.length === 0) return;

      const character = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character === $gamePlayer);
      let dx = 0;
      let dy = 0;

      const targetData = events
        .map(ev => {
          if (ev == character) {
            ev = character._character;
            dx = ev._x - picX;
            dy = ev._y - picY;
          } else if ((params.targetfollowers === true || params.targetfollowers === "true") && followers.includes(ev)) {
            ev = ev._character;
            dx = ev.x - picX;
            dy = ev.y - picY;
          } else {
            dx = ev.x - picX;
            dy = ev.y - picY;
          }
          return { event: ev, dist: Math.sqrt(dx * dx + dy * dy) };
        }).sort((a, b) => a.dist - b.dist);

      const followSpeedValue = params.FollowSpeed;

      for (let i = 0; i < sprites.length; i++) {
        const sp = sprites[i];

        if (sp._followTarget && sp._followTarget._exists) continue;

        let chosen;
        switch (String(params.FollowType)) {
          case "near":
            chosen = targetData[0].event;
            break;
          case "far":
            chosen = targetData[targetData.length - 1].event;
            break;
          case "closestorder":
            chosen = targetData[i % targetData.length].event;
            break;
          case "random":
            chosen = targetData[Math.floor(Math.random() * targetData.length)].event;
            break;
          default:
            chosen = targetData[0].event;
        }

        sp._followTarget = chosen;
        sp._followSpeed = followSpeedValue;
      }
    }

    let totalBullets = sprites.length;
    let hitCount = 0;

    function updateShotPicture() {
      const playerSprite = getPlayerSprite();
      if (!playerSprite) return;

      if (!$gameMessage.isBusy() && !$gameMap._interpreter.isRunning()) {

        if (updateShotPicture._pendingHitsSwitch && updateShotPicture._pendingHitsSwitch.length > 0) {
          const switchvalue = updateShotPicture._pendingHitsSwitch[0];
          if (switchvalue.hitSwitchId != 0 && $gameSwitches.value(switchvalue.hitSwitchId) == false) {
            const next = updateShotPicture._pendingHitsSwitch.shift();
            $gameSwitches.setValue(next.hitSwitchId, true);
          }
        }

        if (updateShotPicture._pendingHits && updateShotPicture._pendingHits.length > 0) {
          const next = updateShotPicture._pendingHits.shift();
          if (params.HitTarget != 0) $gameVariables.setValue(params.HitTarget, next.eventId);
          $gameTemp.reserveCommonEvent(next.commonEventId);
        }
      }

      sprites.forEach((sprite, index) => {
        if (!sprite || sprite._destroyed) return;
        sprite._elapsedTime += 1 / 60;

        const baseSpeed = sprite._speed ?? 0.3;
        let speed;

        switch (params.easingType) {
          case "linear":
            speed = baseSpeed;
            break;
          case "easeIn":
            speed = baseSpeed * (1 + sprite._elapsedTime * 1.5);
            break;
          case "easeOut":
            speed = Math.max(baseSpeed * (1 - sprite._elapsedTime * 0.2), 0.5);
            break;
          default:
            speed = baseSpeed;
            break;
        }

        const tw = $gameMap.tileWidth();
        const th = $gameMap.tileHeight();

        if (sprite._followTarget && sprite._followSpeed > 0) {
          const target = sprite._followTarget;
          const targetMapX = (target._mapX != null) ? (target._mapX) : (target.x);
          const targetMapY = (target._mapY != null) ? (target._mapY) : (target.y);

          const dx = targetMapX - sprite._mapX;
          const dy = targetMapY - sprite._mapY;
          const targetAngle = Math.atan2(dy, dx);

          if (sprite._angle == null) sprite._angle = targetAngle;

          let angleDiff = ((targetAngle - sprite._angle + Math.PI) % (Math.PI * 2)) - Math.PI;
          const baseTurn = 0.001;
          const turnPower = Math.pow(sprite._followSpeed || 1, 1.5);
          const turnSpeed = baseTurn * turnPower * (sprite._speed ?? 1);

          if (angleDiff > turnSpeed) sprite._angle += turnSpeed;
          else if (angleDiff < -turnSpeed) sprite._angle -= turnSpeed;
          else sprite._angle = targetAngle;

          sprite.rotation = sprite._angle;
          sprite._mapX += Math.cos(sprite._angle) * (speed / tw);
          sprite._mapY += Math.sin(sprite._angle) * (speed / th);
        }
        else {
          sprite._mapX += Math.cos(sprite._angle) * (speed / tw);
          sprite._mapY += Math.sin(sprite._angle) * (speed / th);
        }
        sprite.x = $gameMap.adjustX(sprite._mapX) * tw + tw / 2;
        sprite.y = $gameMap.adjustY(sprite._mapY) * th + th / 2;

        const mapX = Math.round(sprite._mapX);
        const mapY = Math.round(sprite._mapY);
        if ($gameMap.regionId(mapX, mapY) == params.DeleteWall) {
          SceneManager._scene.removeChild(sprite);
          sprite._destroyed = true;
          sprites.splice(index, 1);
          return;
        }

        let hit = false;
        let hitEvent = null;
        const targets = [];

        if (target.includes(-1)) {
          targets.push({ type: "player", sprite: playerSprite, event: null });
          if (params.targetfollowers === true || params.targetfollowers === "true") {
            for (let i = 1; i < $gameParty.size(); i++) {
              targets.push({ type: "Follower", sprite: getFollowerSprite(i), event: null });
            }
          }
        }

        $gameMap.events().forEach(event => {
          if (target.includes(event.eventId())) {
            const eventSprite = SceneManager._scene._spriteset._characterSprites.find(eSprite => eSprite._character === event);
            if (eventSprite) targets.push({ type: "event", sprite: eventSprite, event });
          }
        });

        for (const t of targets) {
          if (transparencyCheck) {
            if (polygonsIntersect(
              getPolygonVertices(t.sprite.x, t.sprite.y - t.sprite.height / 2,
                t.sprite.width * t.sprite.scale.x, t.sprite.height * t.sprite.scale.y, t.sprite.rotation),
              getPolygonVertices(sprite.x, sprite.y,
                sprite.width * sprite.scale.x, sprite.height * sprite.scale.y, sprite.rotation)
            )) {
              hit = true;
              hitEvent = t.event;
              break;
            }
          } else {
            const points = checkCollision(t.sprite, sprite);
            if (points && points.length > 0) {
              hit = true;
              hitEvent = t.event;
              break;
            }
          }
        }

        if (hit) {
          if (deletebullet) {
            SceneManager._scene.removeChild(sprite);
            sprite._destroyed = true;
            sprites.splice(index, 1);
          }

          hitCount++;
          if (hitCount <= totalBullets) {
            const eventId = hitEvent ? hitEvent.eventId() : -1;

            updateShotPicture._pendingHitsSwitch = updateShotPicture._pendingHitsSwitch || [];
            updateShotPicture._pendingHitsSwitch.push({ hitSwitchId: hitswitch });

            updateShotPicture._pendingHits = updateShotPicture._pendingHits || [];
            updateShotPicture._pendingHits.push({
              eventId,
              commonEventId: hitcommon
            });
          }
          return;
        }
      });
    }


    const _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
      _Scene_Map_updateMain.call(this);
      Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        sprites.forEach((sprite) => {
          SceneManager._scene.removeChild(sprite);
          sprites.splice(sprites.indexOf(sprite), 1);
        })
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

  function getFollowerSprite(i) {
    const sprite = SceneManager._scene._spriteset._characterSprites.find(sprite => sprite._character._memberIndex == i)
    return sprite;
  }

})();
