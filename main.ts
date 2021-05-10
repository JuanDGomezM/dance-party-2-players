controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.setVolume(10)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)
effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level`)
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
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed = 20
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
        left.setPosition(30, 8)
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
        up.setPosition(60, 8)
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
        down.setPosition(100, 8)
        down.say("ABAJO")
        down.setVelocity(0, speed)
    } else {
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
        right.setPosition(130, 8)
        right.say("DERECHA")
        right.setVelocity(0, speed)
    }
})
