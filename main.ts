namespace SpriteKind {
    export const Protect = SpriteKind.create()
    export const Arrow = SpriteKind.create()
    export const Arrowbad = SpriteKind.create()
    export const Blast = SpriteKind.create()
    export const Morbin = SpriteKind.create()
    export const Rasho = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Blast, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Le_go > 0) {
        if (controller.B.isPressed()) {
            Crotolamo = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . 6 6 6 5 5 6 6 6 . . . . 
                . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
                . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                . . . . 6 6 8 8 8 8 6 6 . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Protect)
            Crotolamo.setPosition(ZelLink.x, ZelLink.y - 3)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            pause(5000)
            sprites.destroy(Crotolamo, effects.bubbles, 500)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
            pause(5000)
        }
    }
})
sprites.onOverlap(SpriteKind.Morbin, SpriteKind.Projectile, function (sprite, otherSprite) {
    MorbiusHp.value += -1
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Le_go > 0) {
        if (controller.B.isPressed() && Le_go > 1) {
            Cock_blast = sprites.create(img`
                . . . . . . 8 8 . . . . . . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . 8 8 . . 8 . 8 . . 8 8 . . . 
                . . 8 . 8 . 8 . 8 6 8 . 8 . . . 
                . . . 8 . 8 8 . 8 6 . 8 . . . . 
                8 8 8 8 6 . 8 . . . 8 . . . . . 
                8 . . . . . . . . 6 8 8 8 8 8 8 
                . 8 8 8 6 8 . . . . . . . . . 8 
                . . . . . 6 . . . 8 8 6 8 8 8 . 
                . . . . 8 . 8 . 8 . 6 . . . . . 
                . . . 8 . 8 6 . 8 8 . 8 . . . . 
                . . 8 . 8 . 6 . 8 . 8 . 8 . . . 
                . . 8 8 . . 8 . 8 . . 8 8 . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . . . . . 8 . 8 . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                `, SpriteKind.Blast)
            Cock_blast.changeScale(2, ScaleAnchor.Middle)
            Cock_blast.setPosition(ZelLink.x, ZelLink.y)
            if (info.life() < 3 && info.life() > 0) {
                info.changeLifeBy(1)
            }
            controller.moveSprite(ZelLink, 0, 0)
            pause(2000)
            sprites.destroy(Cock_blast, effects.coolRadial, 500)
            controller.moveSprite(ZelLink, 50, 50)
            pause(10000)
        } else {
            fium = sprites.createProjectileFromSprite(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .......22...22......
                ......2322.2222.....
                ......232222222.....
                ......222222222.....
                .......2222232......
                ........22232.......
                .........222........
                ..........2.........
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `, ZelLink, 0, -200)
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.smiles, 100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Morbin, SpriteKind.Blast, function (sprite, otherSprite) {
    MorbiusHp.value += -5
    pause(2000)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Blast, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite, effects.fire, 500)
    sprites.destroy(otherSprite)
    music.play(music.createSong(hex`0078000408020102001c000c960064006d019001000478002c010000640032000000000a0600050600000004000120`), music.PlaybackMode.UntilDone)
})
function Final () {
    tiles.setCurrentTilemap(tilemap`level3`)
    controller.moveSprite(ZelLink, 0, 0)
    for (let index = 0; index < 10; index++) {
        Cat = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . 4 . . 3 . . . 4 . . 
            . . . . 4 4 4 4 4 3 4 4 . 4 . . 
            . . . . f 4 4 3 3 3 3 4 4 . . . 
            . . . . 4 4 3 3 3 4 3 3 . . . . 
            . . . 3 3 3 3 3 . 3 3 3 3 3 . . 
            . . . . . 3 3 3 3 3 3 3 3 3 3 3 
            . . . . . . . 3 3 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 . 3 3 3 . . . 
            . 3 3 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.StatusBar)
        Cat.setPosition(randint(90, 130), randint(20, 30))
    }
    my_enemy = sprites.create(assets.image`myImage`, SpriteKind.StatusBar)
    my_enemy.setPosition(100, 20)
    ZelLink.setPosition(100, 80)
    scene.centerCameraAt(ZelLink.x, ZelLink.y - 20)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . 1 . . 1 . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . 1 . . 5 5 1 . . . . . 
        . . . . . 1 5 5 5 5 1 . . . . . 
        . . . . . . 1 5 5 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.StatusBar)
    mySprite.setPosition(100, 90)
    Te_voy_a_rajar = sprites.create(assets.image`myImage0`, SpriteKind.StatusBar)
    Te_voy_a_rajar.setPosition(110, 80)
    Alcantarisha = sprites.create(assets.image`myImage1`, SpriteKind.StatusBar)
    Alcantarisha.setPosition(90, 80)
    pause(2000)
    ZelLink.sayText("Well.... that was easy", 5000, false)
    pause(5000)
    ZelLink.sayText("Wait........ what is this?", 5000, false)
    pause(5000)
    ZelLink.sayText("A calculator?", 5000, false)
    pause(5000)
    ZelLink.sayText("Mmmmmmmmm this could be fun", 5000, false)
    pause(5000)
    ZelLink.sayText("\"Welcome you are in the lands of calculator\"", 5000, false)
    pause(5000)
    ZelLink.sayText("\"where the numbers are your enemies", 5000, false)
    pause(5000)
    ZelLink.sayText("or your friends........\"")
    pause(7000)
    game.gameOver(false)
}
info.onCountdownEnd(function () {
    sprites.destroy(RASHO_LASHER, effects.disintegrate, 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (Le_go == 0) {
        controller.moveSprite(ZelLink, 0, 0)
        tiles.setCurrentTilemap(tilemap`level9`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Arrow)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorOpenSouth)
        Morbius = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f f f f b b b b b b b b f f f f 
            f f f b 2 b b b b b 2 b b f f f 
            f f b b 2 b b b b b 2 b b b f f 
            f f b b b b b c b b b b b b f f 
            f b b b b b b b c b b b b b b f 
            b b b b b b b c b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b f f f f f f f f f f f f b b 
            b b b 1 b b b b b b b b 1 b b b 
            b b b 2 b b b b b b b b 2 b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b c b b b b c c b b b b b b 
            b b b b c b b c b b c b b b b b 
            b b b b c b b c b b c b b b b b 
            `, SpriteKind.Morbin)
        Morbius20 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . f 
            f f f f . . . . . . . . . f f f 
            f f f f . . . . . . . . . f f f 
            f f f f f . . . . . . . f f f f 
            f f f f f f . . . . . f f f f f 
            f f f f f f . . . . . f f f f f 
            f . f f f f . . . . . f f f . f 
            f . f f f f . . . . . f f f . f 
            . . . f . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Morbin)
        animation.runImageAnimation(
        Morbius20,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . f 
            f f f f . . . . . . . . . f f f 
            f f f f . . . . . . . . . f f f 
            f f f f f . . . . . . . f f f f 
            f f f f f f . . . . . f f f f f 
            f f f f f f . . . . . f f f f f 
            f . f f f f . . . . . f f f . f 
            f . f f f f . . . . . f f f . f 
            . . . f . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f . . . . . . . . . f f f 
            f f f f f . . . . . . . f f f f 
            f f f f f f . . . . . f f f f f 
            f f f f f f . . . . . f f f f f 
            f f f f f f . . . . . f f f f f 
            f f f f f f . . . . . f f f f f 
            f f . f . . . . . . . . f . f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        MorbiusHp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        MorbiusHp.max = 20
        MorbiusHp.attachToSprite(Morbius)
        Morbius20.setScale(3, ScaleAnchor.Middle)
        Morbius.setPosition(105, 90)
        Le_go = -1
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    scene.centerCameraAt(Morbius.x, Morbius.y)
    Le_go = -2
    sprites.destroyAllSpritesOfKind(SpriteKind.Arrow)
    music.stopAllSounds()
    Morbius.sayText("Shit", 5000, false)
    pause(5000)
    sprites.destroy(Morbius, effects.spray, 2000)
    sprites.destroy(Morbius20, effects.spray, 2000)
    pause(2000)
    Final()
})
scene.onHitWall(SpriteKind.Arrow, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Blast, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.bubbles, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
info.onScore(10, function () {
    Le_go = 0
    tiles.setCurrentTilemap(tilemap`level6`)
    music.stopAllSounds()
    ZelLink.sayText("Continue", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrowbad, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    ZelLink.sayText("Let´s give some love with \"A\"", 2000, false)
    pause(2000)
    ZelLink.sayText("And I can protect me with \"B\"", 2000, false)
    pause(2000)
    music.play(music.createSong(hex`0078000408040800001c00010a006400f4016400000400000000000000000000000000050000043d0008000c00010d10001400020a1220002400010a28002c0001122c003000010d38003c0001113c004000010a44004800010a74007800010d78007c00011201001c000f05001202c102c201000405002800000064002800031400060200044e0000000400010c0c001000011414001800010824002800010d2c003000011134003800010d38003c00011444004800010a4c00500001115c006000010a6c007000010a7000740001167c008000010d03001c0001dc00690000045e010004000000000000000000000564000104000348001c002000010f24002800010828002c00010d3000340001113400380001083c004000011148004c00010c64006800011268006c0001186c007000010d74007800010878007c00010f04001c00100500640000041e000004000000000000000000000000000a0400043d0008000c0001121c002000010520002400011130003400010838003c00010844004800010f58005c00010d64006800010d6c00700002061674007800011605001c000f0a006400f4010a0000040000000000000000000000000000000002360018001c00010d24002800010630003400010d48004c0001164c005000010a54005800011160006400010f64006800011878007c00010806001c00010a006400f4016400000400000000000000000000000000000000023c0010001400010d28002c0001143000340001053c004000010d40004400011448004c00010550005400011458005c00011660006400010568006c00011107001c00020a006400f401640000040000000000000000000000000000000003550008000c00010a18001c0001141c002000010a20002400011228002c00010a3400380001143c004000010644004800011250005400010554005800010c64006800010a70007400020d127400780001057c008000011608001c000e050046006603320000040a002d00000064001400013200020100023d0018001c00010d24002800010630003400010d48004c0001164c005000010a540058000205115c006000011260006400010f64006800011878007c000108`), music.PlaybackMode.LoopingInBackground)
    Le_go = 1
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Protect, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Rasho, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() < 3 && info.life() > 0) {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite, effects.hearts, 100)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(2000)
})
let METEOR_SMASH: Sprite = null
let Bolon: Sprite = null
let Miau: Sprite = null
let Morbius20: Sprite = null
let Morbius: Sprite = null
let RASHO_LASHER: Sprite = null
let Alcantarisha: Sprite = null
let Te_voy_a_rajar: Sprite = null
let mySprite: Sprite = null
let my_enemy: Sprite = null
let Cat: Sprite = null
let fium: Sprite = null
let Cock_blast: Sprite = null
let MorbiusHp: StatusBarSprite = null
let Crotolamo: Sprite = null
let ZelLink: Sprite = null
let Le_go = 0
Le_go = 0
info.setScore(0)
info.setLife(3)
let Chest = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Arrowbad)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Chest, sprites.dungeon.chestOpen)
ZelLink = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . f d d 6 d 6 d d f . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . . f d 2 d f . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 . 7 . 7 . . . . . . 
    . . . . . d . 7 f d f . . . . . 
    . . . . . . . 7 b f b . . . . . 
    . . . . . . 7 . 7 b . . . . . . 
    . . . . . . 7 . 7 b . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(ZelLink, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(ZelLink)
controller.moveSprite(ZelLink, 50, 50)
ZelLink.sayText("I need the chest", 2000, false)
game.onUpdateInterval(5000, function () {
    if (Le_go == 1) {
        Miau = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . 4 . 4 . . . . . . . . 
            `, SpriteKind.Enemy)
        Miau.setPosition(randint(30, 230), 30)
        animation.runImageAnimation(
        Miau,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . 4 . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . 4 . 4 . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . . . 4 . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . f . 4 . f . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . 4 2 f 2 4 . . . . . . . 
            . . . . . 4 2 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 4 f 4 f . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . 4 . 4 4 4 4 4 . 4 . . . . . 
            . 4 . . . 4 4 4 . . . 4 . . . . 
            . . 4 . . . 4 . . . 4 . . . . . 
            . . 4 . . 4 . 4 . . 4 . . . . . 
            . . . . . 4 . 4 . . . . . . . . 
            `],
        500,
        true
        )
        Miau.follow(ZelLink, 30)
    }
})
game.onUpdateInterval(5000, function () {
    if (Le_go == 2) {
        Bolon = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . 2 2 2 2 2 . . . . . . . . 
            . . 2 2 3 2 2 2 2 . . . . . . . 
            . . 2 3 2 2 2 2 2 . . . . . . . 
            . . 2 2 2 2 3 2 2 . . . . . . . 
            . . 2 2 2 2 3 2 2 . . . . . . . 
            . . 2 2 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 . . . . . . . . 
            . . . . . 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Arrow)
        Bolon.setPosition(Morbius.x, Morbius.y)
        Bolon.follow(ZelLink, 10)
    }
})
game.onUpdateInterval(15000, function () {
    if (Le_go == 2) {
        RASHO_LASHER = sprites.create(img`
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . 3 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 3 . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . 3 3 3 3 2 2 2 2 3 3 3 . . . 
            2 . . 3 3 3 2 2 2 2 3 3 3 . . 2 
            2 2 . 3 3 3 2 2 2 2 3 3 3 . 2 2 
            . 2 . 3 3 3 2 2 2 2 3 3 3 . 2 . 
            3 . 3 3 3 2 2 2 2 2 2 3 3 3 . 3 
            3 3 3 2 2 2 2 2 2 2 2 2 2 3 3 3 
            . 3 3 2 2 2 2 2 2 2 2 2 2 3 3 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `, SpriteKind.Rasho)
        RASHO_LASHER.setScale(5, ScaleAnchor.Bottom)
        RASHO_LASHER.setPosition(Morbius.x, Morbius.y + 50)
        info.startCountdown(5)
        animation.runImageAnimation(
        RASHO_LASHER,
        [img`
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . 3 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 3 . . 
            . . . 3 3 3 2 2 2 2 3 3 3 . . . 
            . . 3 3 3 3 2 2 2 2 3 3 3 . . . 
            2 . . 3 3 3 2 2 2 2 3 3 3 . . 2 
            2 2 . 3 3 3 2 2 2 2 3 3 3 . 2 2 
            . 2 . 3 3 3 2 2 2 2 3 3 3 . 2 . 
            3 . 3 3 3 2 2 2 2 2 2 3 3 3 . 3 
            3 3 3 2 2 2 2 2 2 2 2 2 2 3 3 3 
            . 3 3 2 2 2 2 2 2 2 2 2 2 3 3 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `,img`
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . 3 3 3 2 2 2 2 2 2 3 3 3 . . 
            . . 3 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 2 2 2 2 2 2 3 3 . . . 
            . . . 3 3 3 2 2 2 2 3 3 3 3 2 . 
            . . . 3 3 3 2 2 2 2 3 3 3 3 2 . 
            2 . . 3 3 3 2 2 2 2 3 3 3 . . 2 
            2 2 3 3 3 3 2 2 2 2 3 3 3 . 2 2 
            2 . . 3 3 3 2 2 2 2 3 3 3 . . 2 
            2 2 3 3 3 3 2 2 2 2 3 3 3 . 2 2 
            . 2 . 3 3 3 2 2 2 2 3 3 3 . 2 . 
            3 . 3 3 3 2 2 2 2 2 2 3 3 3 . 3 
            3 3 3 2 2 2 2 2 2 2 2 2 2 3 3 3 
            . 3 3 2 2 2 2 2 2 2 2 2 2 3 3 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `],
        500,
        true
        )
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        ZelLink,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 7 f . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 . 7 . 7 . . . . . 
            . . . . . f d f 7 . d . . . . . 
            . . . . . b f b 7 . . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            . . . . . . b 7 . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 7 f . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 . 7 . 7 . . . . . 
            . . . . . f d f 7 . d . . . . . 
            . . . . . b f b 7 . . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 7 f . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 . 7 . 7 . . . . . 
            . . . . . f d f 7 . d . . . . . 
            . . . . . b f b 7 . . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            . . . . . . b . . 7 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . f 7 7 7 7 7 7 7 f . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . 7 . 7 . 7 . . . . . 
            . . . . . f d f 7 . d . . . . . 
            . . . . . b f b 7 . . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            . . . . . . b 7 . 7 . . . . . . 
            `],
        500,
        true
        )
        pauseUntil(() => !(controller.up.isPressed()))
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        ZelLink,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f d d d f . . . . . . . 
            . . . f d d d d d f . . . . . . 
            . . f d d 6 d 6 d d f . . . . . 
            . . . f d d d d d f . . . . . . 
            . . . . f d 2 d f . . . . . . . 
            . . . . . f d f . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 . 7 . 7 . . . . . . . 
            . . . . d . 7 f d f . . . . . . 
            . . . . . . 7 b f b . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            . . . . . 7 . . b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f d d d f . . . . . . . 
            . . . f d d d d d f . . . . . . 
            . . f d d 6 d 6 d d f . . . . . 
            . . . f d d d d d f . . . . . . 
            . . . . f d 2 d f . . . . . . . 
            . . . . . f d f . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 . 7 . 7 . . . . . . . 
            . . . . d . 7 f d f . . . . . . 
            . . . . . . 7 b f b . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f d d d f . . . . . . . 
            . . . f d d d d d f . . . . . . 
            . . f d d 6 d 6 d d f . . . . . 
            . . . f d d d d d f . . . . . . 
            . . . . f d 2 d f . . . . . . . 
            . . . . . f d f . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 . 7 . 7 . . . . . . . 
            . . . . d . 7 f d f . . . . . . 
            . . . . . . 7 b f b . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            . . . . . . . 7 b . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f d d d f . . . . . . . 
            . . . f d d d d d f . . . . . . 
            . . f d d 6 d 6 d d f . . . . . 
            . . . f d d d d d f . . . . . . 
            . . . . f d 2 d f . . . . . . . 
            . . . . . f d f . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            . . . . . 7 7 7 . . . . . . . . 
            . . . . 7 . 7 . 7 . . . . . . . 
            . . . . d . 7 f d f . . . . . . 
            . . . . . . 7 b f b . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            . . . . . 7 . 7 b . . . . . . . 
            `],
        500,
        true
        )
        pauseUntil(() => !(controller.up.isPressed()))
    } else {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            ZelLink,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . f 7 7 7 . . . . . . . . 
                . . . f 7 7 7 7 d . . . . . . . 
                . . . . f 7 7 7 d . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . . . f 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 . 7 . . . . . . 
                . . . . . . . 7 . . f . . . . . 
                . . . . . . . 7 . . b . . . . . 
                . . . . . . . 7 7 . b . . . . . 
                . . . . . . . 7 . 7 b . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . f 7 7 7 . . . . . . . . 
                . . . f 7 7 7 7 d . . . . . . . 
                . . . . f 7 7 7 d . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . . . f 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 . 7 . . . . . . 
                . . . . . . . 7 . f . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . f 7 7 7 . . . . . . . . 
                . . . f 7 7 7 7 d . . . . . . . 
                . . . . f 7 7 7 d . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . . . f 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 . 7 . . . . . . 
                . . . . . . . 7 . . f . . . . . 
                . . . . . . . 7 . . b . . . . . 
                . . . . . . . 7 7 . b . . . . . 
                . . . . . . . 7 . 7 b . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . f 7 7 7 . . . . . . . . 
                . . . f 7 7 7 7 d . . . . . . . 
                . . . . f 7 7 7 d . . . . . . . 
                . . . . . f 7 7 . . . . . . . . 
                . . . . . . f 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 . 7 . . . . . . 
                . . . . . . . 7 . f . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                . . . . . . . 7 . b . . . . . . 
                `],
            500,
            true
            )
            pauseUntil(() => !(controller.right.isPressed()))
        } else if (controller.left.isPressed()) {
            animation.runImageAnimation(
            ZelLink,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 7 7 f . . . . 
                . . . . . . . d 7 7 7 7 f . . . 
                . . . . . . . d 7 7 7 f . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 f . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . . f . . 7 . . . . . . . 
                . . . . . b . . 7 . . . . . . . 
                . . . . . b . 7 7 . . . . . . . 
                . . . . . b 7 . 7 . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 7 7 f . . . . 
                . . . . . . . d 7 7 7 7 f . . . 
                . . . . . . . d 7 7 7 f . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 f . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . . . f . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 7 7 f . . . . 
                . . . . . . . d 7 7 7 7 f . . . 
                . . . . . . . d 7 7 7 f . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 f . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . . f . . 7 . . . . . . . 
                . . . . . b . . 7 . . . . . . . 
                . . . . . b . 7 7 . . . . . . . 
                . . . . . b 7 . 7 . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 7 7 f . . . . 
                . . . . . . . d 7 7 7 7 f . . . 
                . . . . . . . d 7 7 7 f . . . . 
                . . . . . . . . 7 7 f . . . . . 
                . . . . . . . . 7 f . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . . 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . 7 . 7 . . . . . . . 
                . . . . . . f . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                . . . . . . b . 7 . . . . . . . 
                `],
            500,
            true
            )
            pauseUntil(() => !(controller.left.isPressed()))
        }
    }
})
forever(function () {
    if (info.countdown() != 0) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 3240, 3206, 247, 247, 1198, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        pause(1000)
    }
})
forever(function () {
    if (Le_go == -1) {
        ZelLink.sayText("OH NO IT'S MORBIUS!!!!!!!!!", 1000, false)
        pause(1000)
        ZelLink.sayText("It's time for my final weapon....", 2000, false)
        pause(2000)
        ZelLink.sayText("THE COCK BLAST", 2000, false)
        pause(2000)
        ZelLink.sayText("I can use the cock blast by using \"A+B\"", 2000, false)
        pause(2000)
        controller.moveSprite(ZelLink, 50, 50)
        music.play(music.createSong(hex`0078000408040900001c00010a006400f4016400000400000000000000000000000000050000040c0000000400012a1c002000012401001c000f05001202c102c201000405002800000064002800031400060200040c0000000400012a1c002000012403001c0001dc00690000045e01000400000000000000000000056400010400030c0000000400012a1c002000012404001c00100500640000041e000004000000000000000000000000000a0400040c0000000400012a1c002000012405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012a04000800010f10001400010f1c002000012428002c00010f34003800010f48004c00010c54005800010c06001c00010a006400f401640000040000000000000000000000000000000002180000000400012a0c00100001121c002000012450005400010f07001c00020a006400f4016400000400000000000000000000000000000000030c0000000400012a1c002000012408001c000e050046006603320000040a002d0000006400140001320002010002120000000400012a1c002000012430003400011209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000080009000102140015000102280029000102340035000102480049000102540055000102680069000102740075000102`), music.PlaybackMode.LoopingInBackground)
        Le_go = 2
    }
})
forever(function () {
    if (Le_go == 2 || Le_go == -1) {
        Morbius20.setPosition(Morbius.x - 3, Morbius.y - 5)
    }
})
game.onUpdateInterval(30000, function () {
    if (Le_go == 1) {
        METEOR_SMASH = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . 1 . . 1 . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . . 1 . . 2 2 1 . . . . . 
            . . . . . 1 2 2 2 2 1 . . . . . 
            . . . . . . 1 2 2 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        METEOR_SMASH.setPosition(randint(30, 230), randint(30, 230))
        METEOR_SMASH.setScale(1.25, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(200, function () {
    if (Le_go == 1) {
        fium = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . 1 . . . . . . 
            . . . . . . 1 e 1 . . . . . . . 
            . . . . . 1 . e . 1 . . . . . . 
            . . . . . . 1 e 1 . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Arrow)
        fium.setPosition(randint(30, 230), 0)
        fium.setVelocity(0, 65)
    }
})
