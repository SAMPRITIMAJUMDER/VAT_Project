# Drag & Drop (SRS)

There will be a dragging object and 9 boxes.

## Events

### Drag Start
When mouse pressed on the object, dragging starts, in case of mobile devices long holding the object starts `Drag Start` event.

### Drag Move
After dragging starts moving cursor without relasing the cursor considered `Drag Move` event, in case of mobile holding the object and moving the touch position is considered `Drag Move` event;

### Drop

When cursor is released it is a `Drop` event, in case of mobile devices releasing the hold means `Drop` event.

## Functionality

If the object is dropped while it was hovering over a box the object is removed from format position and placed in the box.

## Eye candy
- While Dragging the opacity of dragging object is lowered.
- While dragging if hovered over boxes, the box changes color.
