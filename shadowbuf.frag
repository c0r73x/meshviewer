#version 440
out vec4 color;
in vec3 normal;
in vec4 position;

void main()
{
    color = fract(vec4(position.z / position.w)*50);
}
