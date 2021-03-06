namespace SpriteKind {
    export const player2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`2player`, function (sprite, location) {
    sprite.destroy(effects.fire, 100)
    info.player2.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`1player`, function (sprite, location) {
    sprite.destroy(effects.fire, 100)
    info.player1.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Aurora.setPosition(130, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(10, 100)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Aurora.setPosition(110, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(70, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    if (sprite == steve) {
        info.player1.changeScoreBy(1)
    } else {
        info.player2.changeScoreBy(1)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Aurora.setPosition(150, 100)
})
function player1 () {
    steve = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    steve.setPosition(30, 100)
    info.player1.setLife(5)
    info.player1.setScore(0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(50, 100)
})
info.onLifeZero(function () {
    steve.destroy(effects.disintegrate, 500)
    vidaequipo += -1
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Aurora.setPosition(90, 100)
})
info.player2.onLifeZero(function () {
    Aurora.destroy(effects.disintegrate, 500)
    vidaequipo += -1
})
function player2 () {
    Aurora = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.Player)
    Aurora.setPosition(110, 100)
    info.player2.setLife(5)
    info.player2.setScore(0)
}
let lane2 = 0
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let Aurora: Sprite = null
let steve: Sprite = null
scene.setBackgroundColor(11)
effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level`)
let speed = 20
player2()
player1()
let vidaequipo = 2
game.onUpdateInterval(5000, function () {
    speed += 1
})
game.onUpdateInterval(4000, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . . 
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        left.setPosition(10, 8)
        left.say("IZQUIERDA")
        left.setVelocity(0, speed)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        up.setPosition(30, 8)
        up.say("ARRIBA")
        up.setVelocity(0, speed)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        down.setPosition(50, 8)
        down.say("ABAJO")
        down.setVelocity(0, speed)
    } else if (lane == 4) {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . . 
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        right.setPosition(70, 8)
        right.say("DERECHA")
        right.setVelocity(0, speed)
    }
})
game.onUpdateInterval(4000, function () {
    lane2 = randint(5, 8)
    if (lane2 == 5) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . . 
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . . 
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . . 
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        left.setPosition(90, 8)
        left.say("IZQUIERDA")
        left.setVelocity(0, speed)
    } else if (lane2 == 6) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        up.setPosition(110, 8)
        up.say("ARRIBA")
        up.setVelocity(0, speed)
    } else if (lane2 == 7) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . . 
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . . 
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . . 
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        down.setPosition(130, 8)
        down.say("ABAJO")
        down.setVelocity(0, speed)
    } else if (lane2 == 8) {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . . 
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . . 
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . . 
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        right.setPosition(150, 8)
        right.say("DERECHA")
        right.setVelocity(0, speed)
    }
})
forever(function () {
    if (true) {
    	
    }
})
